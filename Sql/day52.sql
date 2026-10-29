create database product_trigger;
use product_trigger;

create table products( product_id int primary key auto_increment,name varchar(50),price decimal(10,2),stock_quantity int,status varchar(50) default "available");

create table inventory_audit (audit_id int primary key auto_increment,product_id int,action_type varchar(50),old_value varchar(100),new_value varchar(100),changed_at timestamp default current_timestamp);

delimiter //

create trigger prevent_negative_stock
before update on products
for each row
begin
    if new.stock_quantity < 0 then
	signal sqlstate '45000'
    set message_text = 'stock cannot be negative';
    end if;
end //

create trigger audit_price
after update on products
for each row
begin
    if old.price <> new.price then
	insert into inventory_audit
    (product_id, action_type, old_value, new_value)
    values (new.product_id, 'price update', old.price, new.price);
    end if;
end //

create trigger stock_status
before update on products
for each row
begin
    if new.stock_quantity = 0 then
    set new.status = 'out of stock';
    end if;
end //

create trigger uppercase_name
before insert on products
for each row
begin
    set new.name = upper(new.name);
end //

create trigger new_product_log
after insert on products
for each row
begin
insert into inventory_audit
(product_id, action_type, new_value)
values (new.product_id, 'product added', new.name);
end //

delimiter ;

show triggers;