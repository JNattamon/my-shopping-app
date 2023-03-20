-- Answer #1
SELECT o.ORD_NUM, MAX(o.ORD_AMOUNT)
  FROM orders o
  
-- Answer #2
SELECT * 
  FROM (
         SELECT c.CUST_CODE as CUST_CODE, 
                c.CUST_NAME as CUST_NAME, 
                SUM(o.ORD_AMOUNT) as total_amount
           FROM customer c
           JOIN orders o 
             ON c.CUST_CODE = o.CUST_CODE
          GROUP BY c.CUST_CODE
       ) sub
  WHERE sub.total_amount > 5000      

-- Answer #3
SELECT AGENT_CODE, COUNT(ORD_NUM)
  FROM (
         SELECT a.AGENT_CODE as AGENT_CODE,
     			o.ORD_NUM as ORD_NUM,
                o.ORD_DATE as ORD_DATE
           FROM agents a
           JOIN orders o
             ON a.AGENT_CODE = o.AGENT_CODE
          WHERE o.ORD_DATE 
        BETWEEN DATE('2008-07-01') 
            AND DATE('2008-07-31')
       ) sub
  GROUP BY AGENT_CODE