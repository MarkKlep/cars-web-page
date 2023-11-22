import { memo } from "react";

const Price = memo( ({ price }) => {

  console.log("Price Component");

  return (
    <div>
        <p>
            {
                new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                }).format(price)
            }
        </p>
    </div>
  )
} );

export default Price;
