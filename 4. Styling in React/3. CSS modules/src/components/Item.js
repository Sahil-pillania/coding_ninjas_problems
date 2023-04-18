import itemStyle from "./item.module.css";

export default function Item({ item }) {
  return (
    <div className={itemStyle.container}>
      <h3 className={itemStyle.title}>{item.title}</h3>
      <img src={item.image} alt={item.title} className={itemStyle.image} />
      <p>
        <strong className={itemStyle.price}>${item.price}</strong>
      </p>
      <p>{item.description}</p>
    </div>
  );
}
