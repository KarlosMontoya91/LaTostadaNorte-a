export const categories = [['tostadas','Tostadas'],['tacos','Tacos'],['combos','Combos'],['caldos','Caldos y complementos'],['bebidas','Bebidas']];
export const products = [
 ['tostada-grande','tostadas','Tostada Siberia Grande',9000,'La Gigante. Pollo, guacamole y crema.'],
 ['tostada-jr','tostadas','Tostada JR Siberia',7500,'Pollo, guacamole y crema, en versión JR.'],
 ['taco-especial','tacos','Taco Especial Siberia',6500,'Pollo, guacamole y crema.'],
 ['taco-jr','tacos','Taco JR Siberia',5500,'El sabor Siberia en versión JR.'],
 ['combo-tostada','combos','Combo Tostada Especial',10500,'Tostada especial, consomé y bebida.*'],
 ['combo-tostada-jr','combos','Combo Tostada JR',9000,'Tostada JR, consomé y bebida.*'],
 ['combo-taco','combos','Combo Taco Especial',8500,'Taco especial, consomé y bebida.*'],
 ['combo-taco-jr','combos','Combo Taco JR',7500,'Taco JR, consomé y bebida.*'],
 ['consome','caldos','Consomé',3500,'Para acompañar tu pedido.'],
 ['caldo','caldos','Caldo de Pollo',4500,'Un complemento para tu mesa.'],
 ['coca','bebidas','Coca Cola 500 ml',2700,'Presentación de 500 ml.']
].map(([id,category,name,price,description])=>({id,category,name,price,description,available:true}));
export const money = cents => new Intl.NumberFormat('es-MX',{style:'currency',currency:'MXN',maximumFractionDigits:0}).format(cents/100);
export function reconcile(items,catalog=products){return (Array.isArray(items)?items:[]).filter(x=>catalog.some(p=>p.id===x.id&&p.available)&&Number.isInteger(x.quantity)&&x.quantity>0).reduce((a,x)=>{const found=a.find(v=>v.id===x.id);if(found)found.quantity=Math.min(99,found.quantity+x.quantity);else a.push({id:x.id,quantity:Math.min(99,x.quantity)});return a},[])}
export const subtotal = (items,catalog=products) => reconcile(items,catalog).reduce((sum,x)=>sum+catalog.find(p=>p.id===x.id).price*x.quantity,0);
