//先序遍历的递归算法
//先序递归遍历的思路是先遍历根结点，将值存入数组，
//然后递归遍历：先左结点，将值存入数组，继续向下遍历，然后再回溯遍历右结点，将值存入数组，这样递归循环。
var preListRec = []; //定义保存先序遍历结果的数组
var preOrderRec = function(node) {
    if (node) { //判断二叉树是否为空
        preListRec.push(node.value); //将结点的值存入数组中
        preOrderRec(node.left); //递归遍历左子树
        preOrderRec(node.right); //递归遍历右子树
    }
}
preOrderRec(tree);
console.log(preListRec);
//[ '-', '+', 'a', '*', 'b', 'c', '/', 'd', 'e' ]

//非递归
//先序非递归遍历是利用了栈，将根结点放入栈中，然后再取出来，将值放入结果数组，
//然后如果存在右子树，将右子树压入栈，如果存在左子树，将左子树压入栈，然后循环判断栈是否为空，重复上述步骤。
var preListUnRec = []; //定义保存先序遍历结果的数组
var preOrderUnRecursion = function(node) {
    if (node) { //判断二叉树是否为空
        var stack = [node]; //将二叉树压入栈
        while (stack.length !== 0) { //如果栈为空，则循环遍历
            node = stack.pop(); //从栈中取出一个结点
            preListUnRec.push(node.value); //将取出结点的值存入数组中
            if (node.right) stack.push(node.right); //如果存在右子树，将右子树压入栈
            if (node.left) stack.push(node.left); //如果存在左子树，将左子树压入栈
        }
    }
}
preOrderUnRecursion(tree);
console.log(preListUnRec);
//[ '-', '+', 'a', '*', 'b', 'c', '/', 'd', 'e' ]