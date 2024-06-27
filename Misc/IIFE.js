
(function fun()
{
    console.log("IIFE 1");
})();

+function()
{
    console.log("IIFE using + Operator");
}();

!function()
{
    console.log("IIFE using ! Operator");
}();

void function()
{
    console.log("IIFE using void Operator");
}();
