import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {heightPercentageToDP} from 'react-native-responsive-screen';

import CustomSearchBar from '../components/searchBar/Index';
import CustomAddButton from '../components/customAddButton';

export default function Home(props: any) {
  const [messages, setMessages] = useState([
    {
      name: 'John',
      text: 'Hello, how are you?',
      date: '2024-03-10',
    },
    {
      name: 'Jane',
      text: "I'm doing well, thank you!",
      date: '2024-03-10',
    },
    {
      name: 'Mike',
      text: "I'm great, thanks for asking!",
      date: '2024-03-10',
    },
    {
      name: 'Emily',
      text: 'Hi there!',
      date: '2024-03-10',
    },
    {
      name: 'Chris',
      text: 'Nice to meet you!',
      date: '2024-03-10',
    },
    {
      name: 'Sarah',
      text: "How's your day going?",
      date: '2024-03-10',
    },
    {
      name: 'David',
      text: "I'm enjoying the weather today!",
      date: '2024-03-10',
    },
    {
      name: 'Rachel',
      text: 'This is a test message.',
      date: '2024-03-10',
    },
    {
      name: 'Alex',
      text: "I'm looking forward to the weekend.",
      date: '2024-03-10',
    },
    {
      name: 'Olivia',
      text: 'What are your plans for tonight?',
      date: '2024-03-10',
    },
    {
      name: 'Daniel',
      text: 'Hello from the other side!',
      date: '2024-03-10',
    },
    {
      name: 'Sophia',
      text: "I'm feeling productive today!",
      date: '2024-03-10',
    },
    {
      name: 'James',
      text: 'Any interesting news?',
      date: '2024-03-10',
    },
    {
      name: 'Lily',
      text: "I'm excited for the upcoming event.",
      date: '2024-03-10',
    },
    {
      name: 'William',
      text: "What's up?",
      date: '2024-03-10',
    },
  ]);

  const [searchTxt, setSearchTxt] = useState('');

  const filteredMessages = messages.filter(contact =>
    contact.name.toLowerCase().includes(searchTxt.toLowerCase()),
  );

  const getRandomLightColor = () => {
    const randomChannel = () => Math.floor(Math.random() * 256);
    const r = randomChannel();
    const g = randomChannel();
    const b = randomChannel();
    // Ensure the overall color is light by setting each channel to a higher value
    const lightness = 200; // You can adjust this value to control the lightness of the color
    return `rgb(${Math.min(r + lightness, 255)}, ${Math.min(
      g + lightness,
      255,
    )}, ${Math.min(b + lightness, 255)})`;
  };

  const renderMessages = ({item}: any) => {
    // Split the text into first name and last name (if exists)
    let names = item.name.split(' ');
    let firstName = names[0];
    let lastName = names.length > 1 ? names[1] : ''; // Set last name to empty string if not present

    // Extract the first letter from each name
    let firstLetterFirstName = firstName.charAt(0);
    let firstLetterLastName = lastName ? lastName.charAt(0) : ''; // Check if last name exists before extracting its first letter

    // Concatenate the first letters
    let initials = firstLetterFirstName + firstLetterLastName;

    return (
      <TouchableOpacity
        style={styles.messageCont}
        onPress={() => props?.navigation?.navigate('CHAT')}>
        <View
          style={[
            styles.initialCont,
            {backgroundColor: getRandomLightColor()},
          ]}>
          <Text style={styles.nameLogo}>{initials}</Text>
        </View>
        <View style={styles.nameTxtCont}>
          <Text>{item?.name}</Text>
          <Text>{item?.text}</Text>
        </View>
        <Text>{item?.date}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.maineCont}>
      <CustomSearchBar onChangeText={setSearchTxt} />
      <FlatList
        data={filteredMessages}
        renderItem={renderMessages}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatCont}
      />
      <CustomAddButton onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  maineCont: {
    flex: 1,
  },
  flatCont: {paddingBottom: heightPercentageToDP(10)},
  messageCont: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 2,
    paddingVertical: 5,
  },
  initialCont: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginRight: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameLogo: {
    fontSize: 20,
  },
  nameTxtCont: {flex: 1},
});
