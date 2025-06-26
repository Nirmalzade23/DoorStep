import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { s, vs } from 'react-native-size-matters';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';

const reviews = [
  {
    user: 'Amit Sharma',
    comment: 'Excellent service! My car looks brand new. Highly recommend Sparkle Wash.',
    rating: 5,
  },
  {
    user: 'Priya Singh',
    comment: 'Quick and professional. Roshan did a fantastic job!',
    rating: 4,
  },
  {
    user: 'Rahul Verma',
    comment: 'Affordable and reliable car wash service.',
    rating: 4,
  },
];

const services = [
  'Car Wash',
  'Dainting',
  'Painting',
  'Servicing',
];

const timeSlots: string[] = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
];

const SparkleWashDetail = () => {
  const [date, setDate] = useState<Date>(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const onChangeDate = (event: DateTimePickerEvent, selectedDate?: Date) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) setDate(selectedDate);
  };

  const handleBooking = () => {
    if (selectedSlot) {
      setBookingSuccess(true);
      setTimeout(() => setBookingSuccess(false), 2000);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.title}>Sparkle Wash</Text>
        <Image source={require('../assets/images/carwash.jpg')} style={styles.image} />
        <Text style={styles.info}>
          Sparkle Wash offers top-notch car cleaning services with attention to detail and customer satisfaction. We use eco-friendly products and modern equipment to ensure your car shines inside and out.
        </Text>
        <Text style={styles.sectionTitle}>Services:</Text>
        <View style={styles.servicesRow}>
          {services.map((service, idx) => (
            <View key={idx} style={styles.serviceTag}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Service Provider: <Text style={{color:'#5d17b0'}}>Roshan</Text></Text>
        <Text style={styles.sectionTitle}>Rating: <Text style={{color:'#f1c40f'}}>4.5/5 ⭐</Text></Text>
        <Text style={styles.sectionTitle}>Customer Reviews:</Text>
        {reviews.map((review, idx) => (
          <View key={idx} style={styles.reviewBox}>
            <Text style={styles.reviewUser}>{review.user}</Text>
            <Text style={styles.reviewComment}>{review.comment}</Text>
            <Text style={styles.reviewRating}>Rating: {review.rating}/5</Text>
          </View>
        ))}
        {/* Booking Section */}
        <Text style={styles.sectionTitle}>Booking</Text>
        <View style={styles.bookingSection}>
          <Text style={styles.bookingLabel}>Select Date:</Text>
          <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
            <Text style={styles.dateButtonText}>{date.toDateString()}</Text>
          </TouchableOpacity>
          {showDatePicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={onChangeDate}
              minimumDate={new Date()}
            />
          )}
          <Text style={styles.bookingLabel}>Select Time Slot:</Text>
          <View style={styles.slotRow}>
            {timeSlots.map((slot, idx) => (
              <TouchableOpacity
                key={idx}
                style={[styles.slotButton, selectedSlot === slot && styles.slotButtonSelected]}
                onPress={() => setSelectedSlot(slot)}
              >
                <Text style={[styles.slotText, selectedSlot === slot && styles.slotTextSelected]}>{slot}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={[styles.bookingButton, !selectedSlot && { backgroundColor: '#ccc' }]}
            onPress={handleBooking}
            disabled={!selectedSlot}
          >
            <Text style={styles.bookingButtonText}>Book Now</Text>
          </TouchableOpacity>
          {bookingSuccess && <Text style={styles.successMsg}>Booking Successful!</Text>}
        </View>
      </View>
    </ScrollView>
  );
};

export default SparkleWashDetail;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  container: {
    width: '100%',
    alignItems: 'center',
  },
  title: {
    fontSize: s(28),
    fontWeight: 'bold',
    marginBottom: vs(10),
    color: '#5d17b0',
  },
  image: {
    width: s(200),
    height: s(120),
    borderRadius: 12,
    marginBottom: vs(15),
    resizeMode: 'cover',
  },
  info: {
    fontSize: s(16),
    color: '#333',
    marginBottom: vs(15),
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: s(18),
    fontWeight: 'bold',
    marginTop: vs(10),
    marginBottom: vs(5),
  },
  servicesRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: vs(10),
    gap: 8,
  },
  serviceTag: {
    backgroundColor: '#e6e6fa',
    borderRadius: 16,
    paddingVertical: 6,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    marginBottom: 6,
  },
  serviceText: {
    color: '#5d17b0',
    fontWeight: 'bold',
    fontSize: s(15),
  },
  reviewBox: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 12,
    marginBottom: vs(8),
    width: s(320),
  },
  reviewUser: {
    fontWeight: 'bold',
    color: '#5d17b0',
    marginBottom: 2,
  },
  reviewComment: {
    color: '#333',
    marginBottom: 2,
  },
  reviewRating: {
    color: '#f1c40f',
    fontWeight: 'bold',
  },
  bookingSection: {
    marginTop: vs(20),
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f8f8ff',
    borderRadius: 14,
    padding: 16,
    marginBottom: vs(20),
    shadowColor: '#5d17b0',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
  },
  bookingLabel: {
    fontSize: s(16),
    fontWeight: '600',
    marginTop: vs(8),
    marginBottom: vs(4),
    color: '#5d17b0',
    alignSelf: 'flex-start',
  },
  dateButton: {
    backgroundColor: '#e6e6fa',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 18,
    marginBottom: vs(10),
  },
  dateButtonText: {
    color: '#5d17b0',
    fontWeight: 'bold',
    fontSize: s(16),
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: vs(10),
    gap: 8,
  },
  slotButton: {
    backgroundColor: '#e6e6fa',
    borderRadius: 16,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  slotButtonSelected: {
    backgroundColor: '#5d17b0',
  },
  slotText: {
    color: '#5d17b0',
    fontWeight: 'bold',
    fontSize: s(15),
  },
  slotTextSelected: {
    color: '#fff',
  },
  bookingButton: {
    backgroundColor: '#5d17b0',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginTop: vs(10),
    marginBottom: vs(6),
  },
  bookingButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: s(17),
  },
  successMsg: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 8,
    fontSize: s(16),
  },
}); 