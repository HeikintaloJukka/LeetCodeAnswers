# Write your MySQL query statement below
select Email from
(
    select email, count(email) as num from Person group by email
) as counts
where num > 1