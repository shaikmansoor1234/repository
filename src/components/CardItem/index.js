// Write your code here.
// Write your code here.
import './index.css'

const CardItem = props => {
  const {carddetails} = props
  const {title, description, imgUrl, className} = carddetails

  return (
    <li className={className}>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <div>
          <img src={imgUrl} alt={title} />
        </div>
      </div>
    </li>
  )
}

export default CardItem
