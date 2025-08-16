
import { SafeAreaView, Text, Image, Button, TouchableOpacity, TouchableHighlight, Pressable, StyleSheet, useColorScheme } from 'react-native'

const App = () => {

  const theme = useColorScheme();
  const backgroundColor = theme === "dark" ? "#000" : "#fff";
  const textColor = theme === "dark" ? "#fff" : "#000";


  // types of css use in react native
  // 1. Inline styles - styles are defined inline using the style prop
  // 2. Object styles - styles are defined as an object and passed to the style prop
  // 3. StyleSheet - styles are defined using the StyleSheet.create method and passed
  // Best practice is to use StyleSheet.create method to define styles and object styles reduces performance because it creates a new object every time the component is rendered. Inline styles are not recommended as they can lead to performance issues and make the code less
  const style = {
    container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#dadada"
    }
  }

  return (
    // SafeAreaView is used to render content within the safe area boundaries of a device
    //difference between SafeAreaView and View is that SafeAreaView respects the safe area boundaries of a device but viwew does not
    // It is used to avoid content being rendered under the notch or the home indicator on devices
    // It is a wrapper component that can be used to wrap the entire app or a specific
    <SafeAreaView style={[stylesheet.container, {backgroundColor: backgroundColor}]}>
      <Text style={{ color: textColor, fontSize: 30, fontWeight: 700, }}>Chandan</Text>
      <Image style={{ width: 300, height: 400 }}
        source={{ uri: "https://images.unsplash.com/photo-1745236852068-d696ea947378?q=80&w=708&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />

      {/* In react native 3 types of button basically... */}
      {/* 1. Button - A basic button component that can be used to trigger an action */}
      {/* 2. Touchable - A component that can be used to create custom buttons */}
      {/* 3. Pressable - A component that can be used to create custom buttons with more control over the press state */}

      {/* Button is a basic button component that can be used to trigger an action */}
      {/* It is a simple button that can be used to trigger an action */}
      {/* It is not customizable and does not have any styles */}
      {/* It is not recommended to use this component for custom buttons */}
      <Button title="Click Me" onPress={() => alert("Button Pressed")}></Button>

      {/* Touchable is a component that can be used to create custom buttons */}
      {/* It is more flexible than the Button component */}
      {/* TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback are some of the types of Touchable */}
      {/* TouchableOpacity is the most commonly used Touchable component */}
      <TouchableOpacity style={{ margin: 15, borderRadius: 20, color: "white", padding: 10, backgroundColor: "green" }} onPress={() => alert("TouchableOpacity Pressed")}>
        <Text style={{ fontSize: 20 }} >TouchableOpacity Pressed</Text>
      </TouchableOpacity>
      {/* TouchableHighlight is used to create a button that has a highlight effect when pressed */}
      <TouchableHighlight style={{ color: "green", backgroundColor: 'pink' }} onPress={() => alert("TouchableHighlight Pressed")}>
        <Text style={{ fontSize: 20 }}>TouchableHighlight Pressed</Text>
      </TouchableHighlight>
      {/* TouchableWithoutFeedback is used to create a button that does not have any feedback when pressed */}


      {/* Pressable is a component that can be used to create custom buttons with more control over the press state */}
      {/* It is more flexible than the Touchable component */}
      {/* It allows you to control the press state and styles of the button */}
      <Pressable style={{ fontSize: 20, color: "blue", margin: 15, padding: 10, backgroundColor: "yellow" }} onPress={() => alert("Pressable Pressed")}>
        <Text style={{ fontWeight: 700, fontSize: 20 }} padding={10}>
          Pressable Pressed
        </Text>
      </Pressable>

      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      <Text>hello</Text>
      

    </SafeAreaView>

  )
}

export default App


const stylesheet = StyleSheet.create({
  container: {
      flex: 1, 
      justifyContent: "center", 
      alignItems: "center", 
      backgroundColor: "#dadada",
      gap: 10
    }
})