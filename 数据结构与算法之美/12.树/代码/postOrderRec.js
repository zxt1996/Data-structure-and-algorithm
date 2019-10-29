//后序遍历递归
var postListRec = []; //定义保存后序遍历结果的数组
var postOrderRec = function(node) {
    if (node) { //判断二叉树是否为空
        postOrderRec(node.left); //递归遍历左子树
        postOrderRec(node.right); //递归遍历右子树
        postListRec.push(node.value); //将结点的值存入数组中
    }
}
postOrderRec(tree);
console.log(postListRec);
//[ 'a', 'b', 'c', '*', '+', 'd', 'e', '/', '-' ]

//非递归
//这里使用了一个tmp变量来记录上一次出栈、入栈的结点。
//思路是先把根结点和左树推入栈，然后取出左树，再推入右树，取出，最后取根结点。
var postListUnRec = []; //定义保存后序遍历结果的数组
var postOrderUnRec = function(node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        var tmp = null; //定义缓存变量
        while (stack.length !== 0) { //如果栈不为空，则循环遍历
            tmp = stack[stack.length - 1]; //将栈顶的值保存在tmp中
            if (tmp.left && node !== tmp.left && node !== tmp.right) { //如果存在左子树
                stack.push(tmp.left); //将左子树结点压入栈
            } else if (tmp.right && node !== tmp.right) { //如果结点存在右子树
                stack.push(tmp.right); //将右子树压入栈中
            } else {
                postListUnRec.push(stack.pop().value);
                node = tmp;
            }
        }
    }
}
postOrderUnRec(tree);
console.log(postListUnRec);
//[ 'a', 'b', 'c', '*', '+', 'd', 'e', '/', '-' ]