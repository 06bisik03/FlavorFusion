import styles from "../../App.module.css";
import Navbar from "../Navbar";
const BookingPage = () => {
  return (
    <div className={styles.meals_container}>
      <div>
        <Navbar />
      </div>
      <div className={styles.meals_details}>
        <div>
          <div className={styles.backCont}>Booking And Ordering</div>
        </div>

        <div className={styles.bookingDetails}>
          <div className={styles.orderBooking1}>
            <div/>
            <div>Booking</div>
          </div>
          <div className={styles.orderBooking2}>
            <div/>
            <div>Ordering</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BookingPage;
