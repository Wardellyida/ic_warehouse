show databases;		

select * from ic_warehouse.managers;

insert into ic_warehouse.managers
	   values (01, "Manager", "IC2062060");
       
update ic_warehouse.managers
set password="IC206206"
where username="Manager";

