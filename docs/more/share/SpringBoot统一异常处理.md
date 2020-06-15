---
title: Spring Boot统一异常处理
date: 2020-06-15 15:04:00
categories:
  - Spring Boot
tags:
  - Spring Boot
  - 异常
---



## 为什么需要统一异常处理

前后端分离是目前的最主流的开发模式，我们希望前端不用关注后端返回的数据，即使产生了异常，也可以统一处理。
<!-- more -->
如下：

``` java
//异常
{
    "code": 0001,
    "msg": "查无此人",
    "data": null
}

//无异常
{
    "code": 0000,
    "msg": "成功",
    "data": {
        "id": 10,
        "name": "李",
        "age": 7
    }
}
```

1. code：请求接口的返回码，成功或者异常等返回编码，例如定义请求成功，code = "0000"；查询结果为null，code = "0001";

2. msg：请求接口的描述，也就是对返回编码的描述，"0000"：就表示请求成功；"0001"：表示结果为null；

3. data：请求接口成功，返回的结果。

## 创建实体类
使用Lombok插件，简化POJO的getter、setter、toString等。
``` java
/**
 * Created by Hewie
 * 2020-06-15 15:07
 */
@Entity
@Data
public class Girl {

    @Id
    @GeneratedValue
    private Integer id;


    @Min(value = 18, message = "未成年禁止进网吧")
    private Integer age;

    @NotNull(message = "金额必传")
    private Double money;

}
```

## 创建Repository层

使用JPA持久层框架(MyBatis更灵活，更好用、、、)，但是JPA提供了很多基础的增删改查的接口，可以不用手动编写SQL代码，项目简单的话JPA更适合。

``` java
/**
 * Created by Hewie
 * 2020-06-15 15:17
 */
public interface GirlRepository extends JpaRepository<Girl, Integer> {

    //通过年龄来查询
    @Query(value = "select * from girl where age = ?1",nativeQuery = true)
    public List<Girl> findByAge(Integer age);
}
```

## Service层和Service实现层

``` java
//Service层
public interface GirlService {

    /**
     * 通过Id查询一个女生的信息
     * @param id
     * @return
     */
    public Girl findOne(Integer id);

    //通过年龄来查询
    public List<Girl> findByAge(Integer age);

    public void save(Girl girl);
    
}

```

``` java
//Service实现层

@Service
public class GirlServiceImpl implements GirlService{
    @Autowired
    private GirlRepository girlRepository;

    public Girl findOne(Integer id) {
        return girlRepository.findOne(id);
    }

    public List<Girl> findByAge(Integer age){
        return girlRepository.findByAge(age);
    }

    public void save(Girl girl){
        girlRepository.save(girl);
    }
}
```

## 封装返回数据的统一格式

``` java
/**
 * http请求返回的最外层对象
 * Created by Hewie
 * 2020-06-15 15:34
 */
 @Getter
 @Setter
public class Result<T> {

    /** 错误码. */
    private Integer code;

    /** 提示信息. */
    private String msg;

    /** 具体的内容. */
    private T data;
}
```

## Controller层
``` java
@RestController
public class GirlController {
    @Autowired
    private GirlService girlService;

    /**
     * 添加一个女生
     * @return
     */
    @PostMapping(value = "/girls")
    public Result<Girl> girlAdd(@Valid Girl girl, BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Result result = new Result();
            result.setCode(1);
            result.setMsg(bindingResult.getFieldError().getDefaultMessage());
            result.setData(null);
            return result;
        }

        girl.setAge(girl.getAge());
        Result result = new Result();
        result.setCode(0);
        result.setMsg("成功");
        result.setData(girlService.save(gril));

        return result;
    }
}
```

使用Postman工具测试，如下图：

成功：
<img class="can" src="https://s1.ax1x.com/2020/06/15/NClOKg.jpg" alt="Postman测试添加数据(成功)">

失败：金额没有传入
<img class="can" src="https://s1.ax1x.com/2020/06/15/NC19P0.jpg" alt="Postman测试添加数据(失败)">



## ResultUtil工具类

上面Controller层的代码明显有地方是重复的，为了防止出现new Result()的代码造成冗余，封装请求成功和失败时候的方法。

``` java
public class ResultUtil {

    public static Result success(Object object) {
        Result result = new Result();
        result.setCode(0);
        result.setMsg("成功");
        result.setData(object);
        return result;
    }

    public static Result success() {
        return success(null);
    }

    public static Result error(Integer code, String msg) {
        Result result = new Result();
        result.setCode(code);
        result.setMsg(msg);
        return result;
    }
}
```
此时，Controller层的代码可简化为：
``` java
/**
* 添加一个女生
* @return
*/
@PostMapping(value = "/girls")
public Result<Girl> girlAdd(@Valid Girl girl, BindingResult bindingResult) {
    if (bindingResult.hasErrors()) {
        return ResultUtil.error(1, bindingResult.getFieldError().getDefaultMessage());
    }
    girl.setAge(girl.getAge());

    return ResultUtil.success(girlService.save(gril));
}
```

## 实例：判断一个女生年龄，返回其上学状态

在Service层中添加如下方法
``` java
public void getAge(Integer id);
```

在Service实现层中实现：
``` java
public void getAge(Integer id) throws Exception{
    Girl girl = girlRepository.findOne(id);
    Integer age = girl.getAge();
    if (age < 10) {
        //返回"你还在上小学吧" code=100
        throw new Exception();
    }else if (age > 10 && age < 16) {
        //返回"你可能在上初中" code=101
        throw new Exception();
    }
}
```

在Controller层中调用该方法
``` java
@GetMapping(value = "girls/getAge/{id}")
public void getAge(@PathVariable("id") Integer id) throws Exception{
    girlService.getAge(id);
}
```
此时，使用Postman测试如下图：

<img class="can" src="https://s1.ax1x.com/2020/06/15/NCN6jP.jpg" alt="Postman测试获取年龄">

可以看到，此时后台返回的数据没有按照定义的三个字段code、msg、data这种格式来返回。

为了得到异常情况统一的返回数据，我们可以对异常进行捕获，获取到想要的内容，进行封装后返回给前端。

## 新建Handle层
``` java
@ControllerAdvice
public class ExceptionHandle {


    @ExceptionHandler(value = Exception.class)
    @ResponseBody
    public Result handle(Exception e) {
        return ResultUtil.error(100,e.getMessage());
    }
}
```
使用Postman测试如下图：

<img class="can" src="https://s1.ax1x.com/2020/06/15/NCwIaT.jpg" alt="Postman测试获取年龄">


@ControllerAdvice：在spring 3.2中，新增了@ControllerAdvice 注解，用于拦截全局的Controller的异常，注意：ControllerAdvice注解只拦截Controller不会拦截Interceptor的异常。

**优点和缺点**

**优点**：将 Controller 层的异常和数据校验的异常进行统一处理，减少模板代码，减少编码量，提升扩展性和可维护性。

**缺点**：只能处理 Controller 层未捕获（往外抛）的异常，对于 Interceptor（拦截器）层的异常，Spring 框架层的异常，就无能为力了。

## 自定义异常类
此时，返回的code是写死的，为了实现不同的异常有不同的code，需要自定义一个异常类。

Spring中，只有继承RuntimeException才会进行事务回滚，Exception不会进行事务回滚

``` java
@Getter
@Setter
public class GirlException extends RuntimeException{

    private Integer code;

    public GirlException(Integer code, String message) {
        super(message);
        this.code = code;
    }
}
```
修改Service实现层中的方法：
``` java
public void getAge(Integer id) throws Exception{
    Girl girl = girlRepository.findOne(id);
    Integer age = girl.getAge();
    if (age < 10) {
        //返回"你还在上小学吧" code=100
        throw new GirlException(100,"你还在上小学吧");
    }else if (age > 10 && age < 16) {
        //返回"你可能在上初中" code=101
        throw new GirlException(101,"你可能在上初中");
    }
}
```

修改Handle层中的方法：
``` java

private final static Logger logger = LoggerFactory.getLogger(ExceptionHandle.class);

@ExceptionHandler(value = Exception.class)
@ResponseBody
public Result handle(Exception e) {
    if (e instanceof GirlException) {
        GirlException girlException = (GirlException) e;
        return ResultUtil.error(girlException.getCode(), girlException.getMessage());
    }
    else {
        logger.error("【系统异常】{}", e);
        return ResultUtil.error(-1, "未知错误");
    }
}
```
使用日志来记录未知的异常信息，用来进行调试。

## 统一管理返回数据结果
Service实现层中，每一个code和message都是自己手写，如果在很多地方都出现了一样的code，则非常不利于代码维护，因此新建一个枚举类ResultEnum

``` java
@Getter
public enum ResultEnum {
    UNKONW_ERROR(-1, "未知错误"),
    SUCCESS(0, "成功"),
    PRIMARY_SCHOOL(100, "你还在上小学吧"),
    MIDDLE_SCHOOL(101, "你可能在上初中"),

    ;

    private Integer code;

    private String msg;

    ResultEnum(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }
}
```
修改Service实现层代码：
``` java
public void getAge(Integer id) throws Exception{
    Girl girl = girlRepository.findOne(id);
    Integer age = girl.getAge();
    if (age < 10) {
        //返回"你还在上小学吧" code=100
        throw new GirlException(ResultEnum.PRIMARY_SCHOOL);
    }else if (age > 10 && age < 16) {
        //返回"你可能在上初中" code=101
        throw new GirlException(ResultEnum.MIDDLE_SCHOOL);
    }
}
```

修改异常类代码：
``` java
@Getter
@Setter
public class GirlException extends RuntimeException{

    private Integer code;

    public GirlException(ResultEnum resultEnum) {
        super(resultEnum.getMsg());
        this.code = resultEnum.getCode();
    }
}
```
类似地，修改其他相应类中的代码即可。








