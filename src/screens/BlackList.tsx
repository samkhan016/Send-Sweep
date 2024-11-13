import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';

export default function BlackList() {
  const [searchTxt, setSearchTxt] = useState('');
  const [blackList, setBlackList] = useState([
    {
      id: 1,
      name: 'John',
      phoneNumber: '555-1234',
    },
    {
      id: 2,
      name: 'Jane',
      phoneNumber: '555-5678',
    },
    {
      id: 3,
      name: 'Mike',
      phoneNumber: '555-9012',
    },
    {
      id: 4,
      name: 'Emily',
      phoneNumber: '555-3456',
    },
    {
      id: 5,
      name: 'Chris',
      phoneNumber: '555-7890',
    },
    {
      id: 6,
      name: 'Sarah',
      phoneNumber: '555-2345',
    },
    {
      id: 7,
      name: 'David',
      phoneNumber: '555-6789',
    },
    {
      id: 8,
      name: 'Rachel',
      phoneNumber: '555-0123',
    },
    {
      id: 9,
      name: 'Alex',
      phoneNumber: '555-4567',
    },
    {
      id: 10,
      name: 'Olivia',
      phoneNumber: '555-8901',
    },
    {
      id: 11,
      name: 'Daniel',
      phoneNumber: '555-3456',
    },
    {
      id: 12,
      name: 'Sophia',
      phoneNumber: '555-7890',
    },
    {
      id: 13,
      name: 'James',
      phoneNumber: '555-2345',
    },
    {
      id: 14,
      name: 'Lily',
      phoneNumber: '555-6789',
    },
    {
      id: 15,
      name: 'William',
      phoneNumber: '555-0123',
    },
  ]);

  const filteredBlackList = blackList.filter(blackListitem =>
    blackListitem.name.toLowerCase().includes(searchTxt.toLowerCase()),
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

  const renderBlackList = ({item}: any) => {
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
      <TouchableOpacity style={styles.messageCont}>
        <View
          style={[
            styles.initialCont,
            {backgroundColor: getRandomLightColor()},
          ]}>
          <Text style={styles.nameLogo}>{initials}</Text>
        </View>
        <View style={styles.nameTxtCont}>
          <Text>{item?.name}</Text>
          <Text>{item?.phoneNumber}</Text>
        </View>
        <TouchableOpacity style={styles.deleteIconCont}>
          <Image
            source={require('../assets/delete.png')}
            style={styles.deleteIcon}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.maineCont}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search"
        onChangeText={text => {
          setSearchTxt(text);
        }}
      />
      <FlatList
        data={filteredBlackList}
        renderItem={renderBlackList}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  maineCont: {
    flex: 1,
  },
  searchBar: {
    width: widthPercentageToDP(90),
    alignSelf: 'center',
    height: heightPercentageToDP(5),
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
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
  deleteIconCont: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});
