####1. 文字水平居中
将一段文字置于容器的中间，只要设置text-align属性即可：text-align:center; 
####2. 容器水平居中   
先定义容器宽度为固定值或者百分比（小于100%），设置margin即可
```
div#container{
	width:960px;
	margin:0 auto;
}
```
####3. 文字垂直居中   
如果文字是单行，只需将**单行文字**的行间距设置成容器的高度就可以了，如：


```

<div id="container">单行文字垂直居中</div>



/*CSS*/

div#container {height: 35px;line-height: 35px;}

```

当然如果是**多行文字**，只需将文字的行间距设置成文字的n分子一就行了，如：

```

<div id="container">
	多行文字垂直居中
	多行文字垂直居中</div>

/*CSS*/
div#container {height: 40px;line-height: 20px;}
```
####4. 容器垂直居中  
如有两个容器，怎样才能将一个容器成在另一个容器中垂直居中呢？
```
<div id="two">
	<div id="one">
	</div>
</div>

/*首先，将two容器的定位为relative。*/
div#two{
	position:relative;
	height:480px;
}

/*然后，将小容器定位为absolute，再将它的左上角沿y轴下移50％，最后将它margin-top上移本身高度的50％即可。*/
div#one {
	position: absolute;
	top: 50%;
	height: 240px;
	margin-top: -120px;
}
```

####5. 容器水平垂直居中  

#####（1）已知要居中容器宽高（采用绝对定位+margin负值）

```

/*Html结构：*/

<div class="wrapper">

	<div class="content"></div>

</div>



/*CSS结构：*/

.wrapper {  

	position: relative;  

	border:1px solid red;

	width:700px;

	height:100px;

}

.content {  

	border:1px solid red;

	width: 50px;  

	height: 70px;  

	position: absolute;  

	top: 50%; 

	left:50%;

	margin-top:-35px;

	margin-left:-50px;

}

```

#####（2）未知要居中容器宽高（采用绝对定位+margin:auto）

```

/*Html结构： */

<div class="wrapper">

	<div class="content"></div>

</div>



/*CSS结构：*/

.wrapper {    

	position: relative;  

	border:1px solid red;

	width:300px;

	height:100px;

}  

.content {   

	border:1px solid red;

	width: 50px;  

	height: 70px;   

	/*以下开始和已知宽高不一样*/

	margin: auto;  

	position: absolute;  

	top: 0; left: 0; bottom: 0; right: 0;  

}

```
#####（3）未知要居中容器宽高（采用flex）

```

/*Html结构： */

<div class="wrapper">
    <div class="content"></div>
</div>

/*CSS结构：*/
.wrapper {    
    /*-webkit-为兼容此种内核浏览器*/
    display: flex;
    display: -webkit-flex;
    /*为了方便查看，与居中效果无关*/
    width:300px;
    height:100px;
    border:1px solid red;
    /*设置水平垂直居中*/
    justify-content: center;
    align-items: center;
}
/*为了方便查看，与居中效果无关*/
.content {
    border:1px solid red;
    width: 50px;  
    height: 70px;
}



```
#####三种水平垂直居中结果如下：

####6. 容器水平垂直居中 ，文字水平垂直居中（综合上述内容）
```
 /*Html结构：*/
<div class="wrapper">
	<div class="content"></div>
</div>

/*CSS结构：*/
.wrapper {  
	position: relative;  
	border:1px solid red;
	width:300px;
	height:100px;
}  
  
.content {  
	border:1px solid red;
	width: 100px;  
	height: 60px;    
	/*line-height=height/行数，文字垂直居中*/
	line-height: 20px;
	/*文字水平居中*/
	text-align:center;
	/*拆分英文文字自动换行*/
	word-wrap:break-word;
	/*容器水平垂直居中*/
	position: absolute;
	top: 0; left: 0; bottom: 0; right: 0;
	margin: auto；
}
```
#####结果如下：

 

 
