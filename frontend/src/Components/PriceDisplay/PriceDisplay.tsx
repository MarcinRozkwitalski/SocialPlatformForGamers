import React from 'react'

interface Props {
    price: number;
}

const PriceDisplay: React.FC<Props> = ({ price }: Props): JSX.Element => {
  return (
    <div>
      {price === 0 ? `FREE TO PLAY` : `${price}€`}
    </div>
  )
}

export default PriceDisplay