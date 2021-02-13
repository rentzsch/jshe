# jshe: JavaScript HTML Eval

jshe is a lightweight mechanism to evaluate JavaScript code and display its result in a HTML document.

For example, if you wanted to evaluate `1 + 2` and display its result, here's how you'd do it sans jshe:

```html
<div id="jsresult1"></dic>
<script>
  document.getElementById("jsresult1").innerHTML = 1 + 2;
</script>
```

This is how you'd do it in jshe:

```html
<div class="jshe">1 + 2</div>
```

As you can see, jshe automatically associates the code with its output area. In both these examples, the output is the same (ignoring the `class` attribute):

```html
<div>3</div>
```

This is a convenience, but jshe really shines when you want to "show your work":

```html
<div class="jshec">1 + 2</div>
```

Here, both the original code and its result are automatically displayed:

```html
1 + 2
=> 3
```
