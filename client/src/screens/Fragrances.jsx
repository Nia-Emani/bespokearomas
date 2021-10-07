export default function Flavors(props) {
  return (
    <div>
      <h3>Fragrances</h3>
      {props.fragrances.map((fragrance) => (
        <div>
          <img
            key={fragrance.image_url}
            src={fragrance.image_url}
            alt="fragrances bottle"
          />
          <p key={fragrance.id}>{fragrance.name} </p>
        </div>
      ))}
      {/* {props.ratings.map((rating) => (
        <div key={rating.id}>
          <p>{rating.rank}</p>
        </div>
      ))} */}
    </div>
  );
}
