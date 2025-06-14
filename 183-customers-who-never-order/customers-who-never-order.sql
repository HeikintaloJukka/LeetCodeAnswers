# Write your MySQL query statement below
select name as Customers from (
select Customers.id as id, Customers.name as name, Orders.customerId as customerId from Customers left join Orders on Customers.id = Orders.customerId where customerId IS NULL
) as neverOrdered