import React, {useEffect , useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/Title';
import TitleClass from '../../components/Title/classComponent';

const Home = () => {
  const [title, setTitle] = useState('My First Component');

  useEffect(() => {
    setTimeout(() => {
        setTitle('Updated Prop Text');
    }, 3000);
  }, []);
  console.log(title);

  return (
    <SafeAreaView>
      <View>
        <Title />
        <TitleClass text="Title Class Component"/>
      </View>
    </SafeAreaView>
  );
};

export default Home;
