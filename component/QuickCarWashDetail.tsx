import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const reviews = [
  {
    user: 'Pooja Shah',
    comment: 'Quick Car Wash lives up to its name! Super fast and clean.',
    rating: 5,
  },
  {
    user: 'Aakash Jain',
    comment: 'Convenient and affordable. My go-to for a quick wash.',
    rating: 4,
  },
  {
    user: 'Sneha Reddy',
    comment: 'Friendly staff and good service. Recommended!',
    rating: 4,
  },
];

const services = [
  'Car Wash',
  'Express Wash',
  'Vacuuming',
  'Servicing',
];

const timeSlots: string[] = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM',
];

const QuickCarWashDetail = () => {
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
        <Text style={styles.title}>Quick Car Wash</Text>
        <Image source={require('../assets/images/carwash.jpg')} style={styles.image} />
        <Text style={styles.info}>
          Quick Car Wash offers express car cleaning for busy people. Get your car cleaned in record time without compromising on quality.
        </Text>
        <Text style={styles.sectionTitle}>Services:</Text>
        <View style={styles.servicesRow}>
          {services.map((service, idx) => (
            <View key={idx} style={styles.serviceTag}>
              <Text style={styles.serviceText}>{service}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.sectionTitle}>Service Provider: <Text style={{color:'#5d17b0'}}>Sahil</Text></Text>
        <Text style={styles.sectionTitle}>Rating: <Text style={{color:'#f1c40f'}}>4.3/5 ⭐</Text></Text>
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

export default QuickCarWashDetail;

const styles = StyleSheet.create({
  ...require('./SparkleWashDetail').default.styles,
}); 