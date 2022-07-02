import "./menuItem.css";
export function MenuItem(props) {
  const { title, price, img, desc } = props.data;
  return (
    <section className="menuItem">
      <div className="image-div">
        <img src={img} alt={title} />
      </div>
      <div className="content-div">
        <div className="title-price-div">
          <h3 className="title">{title}</h3>
          <p className="price">${price}</p>
        </div>
        <p className="description">{desc}</p>
      </div>
    </section>
  );
}
