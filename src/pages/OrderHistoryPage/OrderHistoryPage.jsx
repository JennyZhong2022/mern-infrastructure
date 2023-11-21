import { checkToken } from '../../utilities/users-service'

const OrderHistoryPage = () => {
  const handleCheckToken = async() => {
    const expDate = checkToken()
    console.log(expDate);
  }
    return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check when My Login Expires</button>
    </>
   
  )
}

export default OrderHistoryPage
