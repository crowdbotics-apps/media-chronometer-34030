import React, { useState } from "react"
import { ScrollView, View } from "react-native"
import { useContext } from "react"
import { UserContext } from "../../store/UserContext"
import { CustomText } from "../../components/CustomText"

const TermsScreen = ({ route }) => {
  const { onChange } = useContext(UserContext)

  return (
    <View style={{ flex: 1, backgroundColor: "#E5E5E5" }}>
      <View>
        <ScrollView
          style={{
            backgroundColor: "#fff",
            marginTop: 6,
            paddingHorizontal: 12,
            paddingVertical: 24,
          }}
        >
          <CustomText
            style={{
              marginTop: 38,
              color: "#343A40",
              fontSize: 13,
              fontWeight: "300"
            }}
            text="The terms denoted below constitute the Privacy Policy guiding the use of Media Chronometer App. They should be strictly followed at all times when using this app."
          />
          <CustomText
            style={{
              marginTop: 38,
              color: "#000000",
              fontSize: 13,
              fontWeight: "300"
            }}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est, vestibulum tellus vel aliquam pellentesque consequat libero felis diam. Lectus amet, sed ultrices sed et amet. Metus in quam tincidunt vestibulum. Nunc ac ac et phasellus pharetra lorem. Tellus cursus enim, elementum tincidunt. Turpis proin morbi odio nulla lobortis.
Nisl sed pretium, metus, ut. In in cras nullam facilisi nunc vitae fringilla. Tincidunt et et enim lorem convallis urna egestas eu ornare. Pharetra tristique turpis mattis elit. Diam feugiat vitae consectetur dapibus.
Euismod morbi sollicitudin condimentum porttitor viverra tristique ut vitae sit. Lacus, tristique vel consequat odio eu nulla morbi. Vulputate id nisi, mauris, ultrices diam egestas est. Quisque nullam ut amet, fringilla eget non sit nisi, sit. Sed sed vitae arcu turpis integer mauris rhoncus, ultrices. Lorem eu, nullam lacinia cursus lectus orci, sagittis. Orci pharetra eget volutpat interdum a quisque nam.
Integer aliquam eleifend mauris eget ornare velit id sed."
          />
          <CustomText
            style={{
              marginTop: 38,
              color: "#F01717",
              fontSize: 13,
              fontWeight: "300",
              fontStyle: "italic"
            }}
            text="Note: Failure to strictly follow this guidelines can lead to temporary suspension or a permanent ban (in some cases) from the use of this digital product."
          />
        </ScrollView>
      </View>
    </View>
  )
}
export default TermsScreen
