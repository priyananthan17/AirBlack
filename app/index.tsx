import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Image, ImageBackground, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Index: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [whatsappNumber, setWhatsappNumber] = useState<string>('');
  const [profession, setProfession] = useState<string>('');
  const [goal, setGoal] = useState<string>('');
  const [city, setCity] = useState<string>('');

  const handleSubmit = () => {
    Alert.alert("Form Submitted", `Name: ${name}, WhatsApp: ${whatsappNumber}, Profession: ${profession}, Goal: ${goal}, City: ${city}`);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.Total}>
        <ImageBackground
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5_dPmv5zDkuUNDGN_-Bf2-8dPW7XLan2lECH9YbGn7_5KlthUXT01Odzfvod25RfUGQ&usqp=CAU' }}
          style={styles.image}
        />
        <Text style={styles.title}>Professional Online Makeup Course</Text>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>Certification Programme</Text>
        </View>
        <Text style={styles.listItem}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrsPeO1p6sVhgWDjkmYi2d2Laa1Z6tPIXCQ&s' }}
            style={styles.icon}
          />
          India's No.1 Online Makeup Course
        </Text>
        <Text style={styles.listItem}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrsPeO1p6sVhgWDjkmYi2d2Laa1Z6tPIXCQ&s' }}
            style={styles.icon}
          />
          Learn by LIVE Do-it-Together Classes
        </Text>
        <Text style={styles.listItem}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvrsPeO1p6sVhgWDjkmYi2d2Laa1Z6tPIXCQ&s' }}
            style={styles.icon}
          />
          Unlimited Practise Session to master skills
        </Text>
        <View style={styles.container}>
          <View style={styles.containerform}>
            <Text style={styles.formTitle}>FILL THE FORM BELOW TO ENQUIRE</Text>
          </View>
          <Text>*Enter your name</Text>
          <TextInput
            style={styles.input}
            placeholder="Eg. Nanthu"
            value={name}
            onChangeText={setName}
          />
          <Text>*Enter your WhatsApp Number</Text>
          <View style={styles.inputContainer}>
            <Picker
              style={styles.countryCode}
              selectedValue="+91"
              onValueChange={() => {}}
            >
              <Picker.Item label="+91" value="+91" />
              <Picker.Item label="+1" value="+1" />
              <Picker.Item label="+44" value="+44" />
              <Picker.Item label="+61" value="+61" />
              <Picker.Item label="+86" value="+86" />
            </Picker>
            <TextInput
              style={styles.phoneInput}
              placeholder="Eg. 0000000000"
              keyboardType="phone-pad"
              value={whatsappNumber}
              onChangeText={setWhatsappNumber}
            />
          </View>
          <Text>*Select your profession</Text>
          <Picker
            selectedValue={profession}
            style={styles.picker}
            onValueChange={(itemValue) => setProfession(itemValue)}
          >
            <Picker.Item label="Choose the most relevant option" value="" />
            <Picker.Item label="Makeup Artist" value="makeup-artist" />
            <Picker.Item label="Beauty Enthusiast" value="beauty-enthusiast" />
          </Picker>
          <Text>*Select your goal</Text>
          <Picker
            selectedValue={goal}
            style={styles.picker}
            onValueChange={(itemValue) => setGoal(itemValue)}
          >
            <Picker.Item label="Choose the most relevant option" value="" />
            <Picker.Item label="Professional Development" value="professional-development" />
            <Picker.Item label="Personal Use" value="personal-use" />
          </Picker>
          <Text>*Select your city</Text>
          <Picker
            selectedValue={city}
            style={styles.picker}
            onValueChange={(itemValue) => setCity(itemValue)}
          >
            <Picker.Item label="Choose the most relevant option" value="" />
            <Picker.Item label="Mumbai" value="mumbai" />
            <Picker.Item label="Delhi" value="delhi" />
            <Picker.Item label="Chennai" value="chennai" />
            <Picker.Item label="Kochi" value="kochi" />
            <Picker.Item label="Hyderabad" value="hyderabad" />
          </Picker>

          <Button title="Submit" onPress={handleSubmit} color="#FF4081" />
        </View>
        <ImageBackground
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5_dPmv5zDkuUNDGN_-Bf2-8dPW7XLan2lECH9YbGn7_5KlthUXT01Odzfvod25RfUGQ&usqp=CAU' }}
          style={styles.imageBackground}
        >
          <Text style={styles.imageText}>Why Should You Join AirBlack?</Text>
          <Button title='Apply Now' color="#FF4081" />
         <View style={styles.socialcontainer}>
         <Image
            source={{ uri: 'data:image/jpeg;base64,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' }}
            style={styles.social}
          />
          <Image
            source={{ uri: 'data:image/png;base64,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' }}
            style={styles.social}
          />
          <Image
            source={{ uri: 'data:image/png;base64,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' }}
            style={styles.social}
          />
          <Image
            source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAZlBMVEUAAAD///8QEBDq6ur6+vrt7e0MDAz19fXKyspxcXHGxsaIiIgoKChHR0fDw8PY2Nirq6ufn58/Pz+YmJh7e3tnZ2cvLy9XV1eBgYEfHx/i4uK9vb1PT09sbGyOjo63t7dfX18YGBjbwxOpAAAE2UlEQVR4nO2cX5u6LBCGsUSsNKs13dxq+33/L/kqMA4kbh68MBz4nLl5rfeFwzh/AJbMiVfHc92WRbb5n5UVZVufjxWffTRz/zk97cqMeVVW7k7pciiRX/3yoK65WAZ1bEMhDWqPC6DyJiTSoCb/ACW+QyP1yr7FX1D7GwFTr9t+HupMgzToPAOVHuiYGDukLqh0R8nE2C6dQlEzmVQjFOm7Uzq8QxHaOOpsQ+WeP3TLlOUmFC+oeZQKbkDV1DSgGqHieHmD1AuUUBdqFtQFoH6oSUz9KCgRNH76pFZIqD01h629hAoW+y7TdYAS1BTvEj3UiRriXaceijw6eNcuYbykhnhXyVlFzTBVxY7UCFMd2Rc1wlRfLJoAAVWz6Oy8t3QWPEv/rIZtqBGmihBp1apVq1Z51q/YTsQ/5PubI9d3Cj+ZQOlspfxd1vod76s8lXVaF9SfaQdWfLd+kHp9uaD4fHHkG5k8FgZ+XFSziccV77n7Y2IZmFUqpS9mTPiOrQ2/rZVWP+icFUVxg9fjjPIbnBe+6866qJyqmshJXzlmVlGNTL+emUazEopDP7n6N7kPG0ABKnKN5shlHH3hM2Z1wnkQopx6scx7p6/evBU6jy5MsnSwOPSQ8Lvrlt7cQpV4NYdQz9OvszNuQAeVhisSdtpa5MXUrFp0BgFLAqUwOR4aADzkbTsyBW1C7ayBgM+uMul/6KAC1y11SJLK4gi0nirZFEcHlYdlYkxzdNKH3vTrHFx3YAdlqTE4sM+6MxwUJ6jmPDSHqgNqFm4w+YxWZnU2zYqhdScwaCTSZrWV5n3pbCaKxSmDIGBS1eWXxUTXJYdEwjIrCgdlSXOkMivIcL1RcAdl6cea/RCT+0rxFqrYmmYF3upJyoSJhDKip7oQL1oo4EhUsumIrUgEkaeM+JrOfJ10guhJzTjwEtT9novLrBLqRQWQJahwHGIr6k4GFKGUt7I+PnSCCEFV9SCmofokK+HnRUV88DopzQrjXwiiwKymBYZQsqp7Qoab5N7qkVhSvhy8FdF6SDu0ezerlMSsGqwggmmpSaeTvy3BqroCA/OvMU9W+an+JfwSNiPWHB4Ok0760BdVbIUF7P3wUYHSsfo0w0cwcPqHDkol76Mvf5rIXdDYGKt1W6jW6dFRlbJNZw5cGOEybWPi60nHZX7aBjerOy5oNxL0whodGLhXIKYSnYE1EKX+o8qQ9YaYUAsRkektGYZJJ80KMrAg3mqDDmry0dURn0ok7la9yK9wn5KjrWYlEuG8FfY7O0fIZOeneuA63zX+58jkXoxZ618f8soaOG/CaGUuPT+ZyHcewKwW9Duhkl4dns/nd+7fW92Qad5TN659hMJbyH5b1u+sHVD+QnY7gprXyUXlqRC6vJ0wKWEPevlgMhzUp3ZCs3VA+VjPfeXjwpvP//3Bp8t1hIe+ezQbflatWrVqlVvUFW+HNnFuvIhyiwp1c8ehOs5tT9RdFIeOcW6li3LTYZTbM+PcyBrllt8oN0fHuY08yg33UR5NEOchDnEed0G+DmSUcTBInEeoRPIC7cNm4jyWh37VGnMcYBTnUU/kVK5DsXoq0pU87uPDBmunm4NzB60lcR5J10cMNcFgfTi8L4nymMNBER4ImcR5dOag+A4ZVSI8jvU/P9wxpi4/OS4AAAAASUVORK5CYII=' }}
            style={styles.social}
          />
         </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    padding: 20,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 10,
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  countryCode: {
    fontSize: 15,
    marginRight: 5,
  },
  phoneInput: {
    flex: 1,
    height: 50,
  },
  picker: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  containerform: {
    backgroundColor: "#FF4081",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  Total: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  title: {
    fontSize: 30,
    color: "white",
    fontFamily: 'Times New Roman',
    margin: 20,
    width: 300,
  },
  badge: {
    backgroundColor: 'gray',
    marginLeft: 30,
    padding: 5,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  badgeText: {
    color: 'white',
  },
  listItem: {
    color: 'white',
    marginLeft: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 50,
    marginRight: 5,
  },
  imageBackground: {
    height: 600,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageText: {
    color: 'white',
    fontSize: 40,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    textAlign: 'center',
  },
  socialcontainer:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  social:{
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 5,
    justifyContent:'center'

  },
});

export default Index;
