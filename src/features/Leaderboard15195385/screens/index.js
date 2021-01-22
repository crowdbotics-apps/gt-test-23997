import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd22/b4e3/b236f002e1c8303dcaf9b75335a44e54"
        }}
        style={styles.ImageBackground_1378_13806}
      />
      <View style={styles.View_1378_13807}>
        <View style={styles.View_I1378_13807_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_13807_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_13807_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_13807_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_13807_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_13807_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_13807_616_1412}
        />
      </View>
      <View style={styles.View_1378_13808} />
      <View style={styles.View_1378_13809} />
      <View style={styles.View_1378_13810} />
      <View style={styles.View_1378_13811}>
        <Text style={styles.Text_1378_13811}>Name</Text>
      </View>
      <View style={styles.View_1378_13812}>
        <Text style={styles.Text_1378_13812}>№</Text>
      </View>
      <View style={styles.View_1378_13813}>
        <Text style={styles.Text_1378_13813}>Country</Text>
      </View>
      <View style={styles.View_1378_13814}>
        <Text style={styles.Text_1378_13814}>Team</Text>
      </View>
      <View style={styles.View_1378_13815}>
        <Text style={styles.Text_1378_13815}>Points</Text>
      </View>
      <View style={styles.View_1378_13816}>
        <Text style={styles.Text_1378_13816}>127</Text>
      </View>
      <View style={styles.View_1378_13817}>
        <Text style={styles.Text_1378_13817}>1</Text>
      </View>
      <View style={styles.View_1378_13818}>
        <Text style={styles.Text_1378_13818}>2</Text>
      </View>
      <View style={styles.View_1378_13819}>
        <Text style={styles.Text_1378_13819}>3</Text>
      </View>
      <View style={styles.View_1378_13820}>
        <Text style={styles.Text_1378_13820}>4</Text>
      </View>
      <View style={styles.View_1378_13821}>
        <Text style={styles.Text_1378_13821}>5</Text>
      </View>
      <View style={styles.View_1378_13822}>
        <Text style={styles.Text_1378_13822}>6</Text>
      </View>
      <View style={styles.View_1378_13823}>
        <Text style={styles.Text_1378_13823}>7</Text>
      </View>
      <View style={styles.View_1378_13824}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f668/fb14/5e6c2cf5ae3ca407e2d32c09f0e64bb2"
          }}
          style={styles.ImageBackground_1378_13825}
        />
        <View style={styles.View_1378_13826}>
          <Text style={styles.Text_1378_13826}>Me</Text>
        </View>
        <View style={styles.View_1378_13827}>
          <Text style={styles.Text_1378_13827}>135 P</Text>
        </View>
        <View style={styles.View_1378_13828}>
          <Text style={styles.Text_1378_13828}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13829}>
          <Text style={styles.Text_1378_13829}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13830}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13831}
        />
      </View>
      <View style={styles.View_1378_13832}>
        <Text style={styles.Text_1378_13832}>8</Text>
      </View>
      <View style={styles.View_1378_13833}>
        <Text style={styles.Text_1378_13833}>9</Text>
      </View>
      <View style={styles.View_1378_13834}>
        <Text style={styles.Text_1378_13834}>10</Text>
      </View>
      <View style={styles.View_1378_13835}>
        <Text style={styles.Text_1378_13835}>11</Text>
      </View>
      <View style={styles.View_1378_13836}>
        <Text style={styles.Text_1378_13836}>12</Text>
      </View>
      <View style={styles.View_1378_13837}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13838}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13839}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13840}
        />
        <View style={styles.View_1378_13841}>
          <Text style={styles.Text_1378_13841}>100 P</Text>
        </View>
        <View style={styles.View_1378_13842}>
          <Text style={styles.Text_1378_13842}>135 P</Text>
        </View>
        <View style={styles.View_1378_13843}>
          <Text style={styles.Text_1378_13843}>67 P</Text>
        </View>
        <View style={styles.View_1378_13844}>
          <Text style={styles.Text_1378_13844}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13845}>
          <Text style={styles.Text_1378_13845}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13846}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13847}
        />
        <View style={styles.View_1378_13848}>
          <Text style={styles.Text_1378_13848}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13849}>
          <Text style={styles.Text_1378_13849}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13850}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13851}
        />
        <View style={styles.View_1378_13852}>
          <Text style={styles.Text_1378_13852}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13853}>
          <Text style={styles.Text_1378_13853}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13854}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13855}
        />
        <View style={styles.View_1378_13856}>
          <Text style={styles.Text_1378_13856}>Marcus</Text>
        </View>
        <View style={styles.View_1378_13857}>
          <Text style={styles.Text_1378_13857}>Michael</Text>
        </View>
        <View style={styles.View_1378_13858}>
          <Text style={styles.Text_1378_13858}>John</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13859}
        />
        <View style={styles.View_1378_13860}>
          <Text style={styles.Text_1378_13860}>100 P</Text>
        </View>
        <View style={styles.View_1378_13861}>
          <Text style={styles.Text_1378_13861}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13862}>
          <Text style={styles.Text_1378_13862}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13863}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13864}
        />
        <View style={styles.View_1378_13865}>
          <Text style={styles.Text_1378_13865}>Michael</Text>
        </View>
      </View>
      <View style={styles.View_1378_13866}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13867}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13868}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13869}
        />
        <View style={styles.View_1378_13870}>
          <Text style={styles.Text_1378_13870}>100 P</Text>
        </View>
        <View style={styles.View_1378_13871}>
          <Text style={styles.Text_1378_13871}>135 P</Text>
        </View>
        <View style={styles.View_1378_13872}>
          <Text style={styles.Text_1378_13872}>67 P</Text>
        </View>
        <View style={styles.View_1378_13873}>
          <Text style={styles.Text_1378_13873}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13874}>
          <Text style={styles.Text_1378_13874}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13875}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13876}
        />
        <View style={styles.View_1378_13877}>
          <Text style={styles.Text_1378_13877}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13878}>
          <Text style={styles.Text_1378_13878}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13879}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13880}
        />
        <View style={styles.View_1378_13881}>
          <Text style={styles.Text_1378_13881}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13882}>
          <Text style={styles.Text_1378_13882}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13883}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13884}
        />
        <View style={styles.View_1378_13885}>
          <Text style={styles.Text_1378_13885}>Marcus</Text>
        </View>
        <View style={styles.View_1378_13886}>
          <Text style={styles.Text_1378_13886}>Michael</Text>
        </View>
        <View style={styles.View_1378_13887}>
          <Text style={styles.Text_1378_13887}>John</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13888}
        />
        <View style={styles.View_1378_13889}>
          <Text style={styles.Text_1378_13889}>100 P</Text>
        </View>
        <View style={styles.View_1378_13890}>
          <Text style={styles.Text_1378_13890}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13891}>
          <Text style={styles.Text_1378_13891}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13892}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13893}
        />
        <View style={styles.View_1378_13894}>
          <Text style={styles.Text_1378_13894}>Michael</Text>
        </View>
      </View>
      <View style={styles.View_1378_13895}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13896}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13897}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13898}
        />
        <View style={styles.View_1378_13899}>
          <Text style={styles.Text_1378_13899}>100 P</Text>
        </View>
        <View style={styles.View_1378_13900}>
          <Text style={styles.Text_1378_13900}>135 P</Text>
        </View>
        <View style={styles.View_1378_13901}>
          <Text style={styles.Text_1378_13901}>67 P</Text>
        </View>
        <View style={styles.View_1378_13902}>
          <Text style={styles.Text_1378_13902}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13903}>
          <Text style={styles.Text_1378_13903}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13904}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13905}
        />
        <View style={styles.View_1378_13906}>
          <Text style={styles.Text_1378_13906}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13907}>
          <Text style={styles.Text_1378_13907}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13908}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13909}
        />
        <View style={styles.View_1378_13910}>
          <Text style={styles.Text_1378_13910}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13911}>
          <Text style={styles.Text_1378_13911}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13912}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13913}
        />
        <View style={styles.View_1378_13914}>
          <Text style={styles.Text_1378_13914}>Marcus</Text>
        </View>
        <View style={styles.View_1378_13915}>
          <Text style={styles.Text_1378_13915}>Michael</Text>
        </View>
        <View style={styles.View_1378_13916}>
          <Text style={styles.Text_1378_13916}>John</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97db/5da6/4f984f4108d2068e9c92dde210530666"
          }}
          style={styles.ImageBackground_1378_13917}
        />
        <View style={styles.View_1378_13918}>
          <Text style={styles.Text_1378_13918}>100 P</Text>
        </View>
        <View style={styles.View_1378_13919}>
          <Text style={styles.Text_1378_13919}>Real Madrid </Text>
        </View>
        <View style={styles.View_1378_13920}>
          <Text style={styles.Text_1378_13920}>España</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7949/c080/eb487130c8f325abae159ff321905b0d"
          }}
          style={styles.ImageBackground_1378_13921}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6718/896e/1d5f599f3ae111fb28f5ceed178bc09c"
          }}
          style={styles.ImageBackground_1378_13922}
        />
        <View style={styles.View_1378_13923}>
          <Text style={styles.Text_1378_13923}>Michael</Text>
        </View>
      </View>
      <View style={styles.View_1378_13924}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_13924_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/825f/f11b/09514c46eb7a96a3b545ab79242e8dac"
          }}
          style={styles.ImageBackground_I1378_13924_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22f6/f66c/ae351d2ddf10e3545a2d88a5268cc955"
          }}
          style={styles.ImageBackground_I1378_13924_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_13924_988_6521}
        />
        <View style={styles.View_I1378_13924_988_6522}>
          <Text style={styles.Text_I1378_13924_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_13924_1364_3889}>
          <Text style={styles.Text_I1378_13924_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_13924_988_6523}>
          <Text style={styles.Text_I1378_13924_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_13924_988_6524}
        />
        <View style={styles.View_I1378_13924_1364_676}>
          <View style={styles.View_I1378_13924_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_13924_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_13924_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_13924_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_13924_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_13924_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_13924_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13924_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13924_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13924_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13924_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13924_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_13924_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_13924_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13924_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13924_1364_708}
            />
          </View>
          <View style={styles.View_I1378_13924_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_13924_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_13924_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_13924_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_13924_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_13924_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_13924_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_13924_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_13925}>
        <Text style={styles.Text_1378_13925}>Leaderboard</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0089/d4d5/ff4b00168c07434051b2ca3c6304849a"
        }}
        style={styles.ImageBackground_1378_13926}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/164e/5afe/d2da6db3883165a31aa0f7fa82012452"
        }}
        style={styles.ImageBackground_1378_13927}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_13806: {
    width: 696,
    minWidth: 696,
    height: 995,
    minHeight: 995,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -158,
    top: -260
  },
  View_1378_13807: {
    width: 375,
    minWidth: 375,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1378_13807_200_649: {
    flexGrow: 1,
    width: 375,
    height: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  ImageBackground_I1378_13807_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_13807_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_13807_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_13807_282_5147: {
    flexGrow: 1,
    width: 12,
    height: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    top: 23,
    resizeMode: "cover"
  },
  ImageBackground_I1378_13807_282_5148: {
    flexGrow: 1,
    width: 12,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 24,
    resizeMode: "cover"
  },
  ImageBackground_I1378_13807_616_1412: {
    flexGrow: 1,
    width: 115.28089904785156,
    height: 24.60260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.88623046875,
    resizeMode: "cover"
  },
  View_1378_13808: {
    width: 366,
    minWidth: 366,
    height: 600,
    minHeight: 600,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 79,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 11.682242393493652,
    borderTopRightRadius: 11.682242393493652,
    borderBottomLeftRadius: 11.682242393493652,
    borderBottomRightRadius: 11.682242393493652
  },
  View_1378_13809: {
    width: 366,
    minWidth: 366,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 71,
    backgroundColor: "rgba(0, 28, 113, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13810: {
    width: 366,
    minWidth: 366,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 152,
    backgroundColor: "rgba(90, 131, 255, 1)",
    opacity: 0.800000011920929
  },
  View_1378_13811: {
    width: 37,
    minWidth: 37,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 133
  },
  Text_1378_13811: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13812: {
    width: 6.206995964050293,
    minWidth: 6.206995964050293,
    minHeight: 6.860363483428955,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.46240234375,
    top: 132
  },
  Text_1378_13812: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13813: {
    width: 41,
    minWidth: 41,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 135,
    top: 133
  },
  Text_1378_13813: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13814: {
    width: 37,
    minWidth: 37,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 216,
    top: 133
  },
  Text_1378_13814: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13815: {
    width: 37,
    minWidth: 37,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314,
    top: 132
  },
  Text_1378_13815: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13816: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 165
  },
  Text_1378_13816: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13817: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 207
  },
  Text_1378_13817: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13818: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 243
  },
  Text_1378_13818: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13819: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 279
  },
  Text_1378_13819: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13820: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 316
  },
  Text_1378_13820: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13821: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 353
  },
  Text_1378_13821: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13822: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 388
  },
  Text_1378_13822: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13823: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 424
  },
  Text_1378_13823: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13824: {
    width: 318,
    minWidth: 318,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 158
  },
  ImageBackground_1378_13825: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_13826: {
    width: 13.703075408935547,
    minWidth: 13.703075408935547,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 7
  },
  Text_1378_13826: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13827: {
    width: 43,
    minWidth: 43,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 7
  },
  Text_1378_13827: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13828: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 7
  },
  Text_1378_13828: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13829: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 7
  },
  Text_1378_13829: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13830: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 1,
    resizeMode: "cover"
  },
  ImageBackground_1378_13831: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 6.6669921875,
    resizeMode: "cover"
  },
  View_1378_13832: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 461
  },
  Text_1378_13832: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13833: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 500
  },
  Text_1378_13833: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13834: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 537
  },
  Text_1378_13834: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13835: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 570
  },
  Text_1378_13835: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13836: {
    width: 16.338281631469727,
    minWidth: 16.338281631469727,
    minHeight: 11.06786823272705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 606
  },
  Text_1378_13836: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7.4867448806762695,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13837: {
    width: 318,
    minWidth: 318,
    height: 134,
    minHeight: 134,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 199
  },
  ImageBackground_1378_13838: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13839: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 36
  },
  ImageBackground_1378_13840: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 72
  },
  View_1378_13841: {
    width: 42,
    minWidth: 42,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 7
  },
  Text_1378_13841: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13842: {
    width: 35,
    minWidth: 35,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 44
  },
  Text_1378_13842: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13843: {
    width: 28,
    minWidth: 28,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 80
  },
  Text_1378_13843: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13844: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 7
  },
  Text_1378_13844: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13845: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 7
  },
  Text_1378_13845: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13846: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_13847: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 6.6669921875,
    resizeMode: "cover"
  },
  View_1378_13848: {
    width: 68,
    minWidth: 68,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 44
  },
  Text_1378_13848: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13849: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 44
  },
  Text_1378_13849: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13850: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 36,
    resizeMode: "cover"
  },
  ImageBackground_1378_13851: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 43.6669921875,
    resizeMode: "cover"
  },
  View_1378_13852: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 80
  },
  Text_1378_13852: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13853: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 80
  },
  Text_1378_13853: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13854: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 74,
    resizeMode: "cover"
  },
  ImageBackground_1378_13855: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 80.6669921875,
    resizeMode: "cover"
  },
  View_1378_13856: {
    width: 43,
    minWidth: 43,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 8
  },
  Text_1378_13856: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13857: {
    width: 45,
    minWidth: 45,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 44
  },
  Text_1378_13857: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13858: {
    width: 29,
    minWidth: 29,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 79
  },
  Text_1378_13858: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13859: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 110
  },
  View_1378_13860: {
    width: 35,
    minWidth: 35,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 116
  },
  Text_1378_13860: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13861: {
    width: 68,
    minWidth: 68,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 116
  },
  Text_1378_13861: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13862: {
    width: 44,
    minWidth: 44,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 116
  },
  Text_1378_13862: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13863: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 109,
    resizeMode: "cover"
  },
  ImageBackground_1378_13864: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 115.6669921875,
    resizeMode: "cover"
  },
  View_1378_13865: {
    width: 47,
    minWidth: 47,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 116
  },
  Text_1378_13865: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13866: {
    width: 318,
    minWidth: 318,
    height: 134,
    minHeight: 134,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 345
  },
  ImageBackground_1378_13867: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13868: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 36
  },
  ImageBackground_1378_13869: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 72
  },
  View_1378_13870: {
    width: 42,
    minWidth: 42,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 7
  },
  Text_1378_13870: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13871: {
    width: 35,
    minWidth: 35,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 44
  },
  Text_1378_13871: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13872: {
    width: 28,
    minWidth: 28,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 80
  },
  Text_1378_13872: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13873: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 7
  },
  Text_1378_13873: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13874: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 7
  },
  Text_1378_13874: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13875: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_13876: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 6.6669921875,
    resizeMode: "cover"
  },
  View_1378_13877: {
    width: 68,
    minWidth: 68,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 44
  },
  Text_1378_13877: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13878: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 44
  },
  Text_1378_13878: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13879: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 36,
    resizeMode: "cover"
  },
  ImageBackground_1378_13880: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 43.6669921875,
    resizeMode: "cover"
  },
  View_1378_13881: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 80
  },
  Text_1378_13881: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13882: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 80
  },
  Text_1378_13882: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13883: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 74,
    resizeMode: "cover"
  },
  ImageBackground_1378_13884: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 80.6669921875,
    resizeMode: "cover"
  },
  View_1378_13885: {
    width: 43,
    minWidth: 43,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 8
  },
  Text_1378_13885: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13886: {
    width: 45,
    minWidth: 45,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 44
  },
  Text_1378_13886: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13887: {
    width: 29,
    minWidth: 29,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 79
  },
  Text_1378_13887: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13888: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 110
  },
  View_1378_13889: {
    width: 35,
    minWidth: 35,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 116
  },
  Text_1378_13889: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13890: {
    width: 68,
    minWidth: 68,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 116
  },
  Text_1378_13890: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13891: {
    width: 44,
    minWidth: 44,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 116
  },
  Text_1378_13891: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13892: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 109,
    resizeMode: "cover"
  },
  ImageBackground_1378_13893: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 115.6669921875,
    resizeMode: "cover"
  },
  View_1378_13894: {
    width: 47,
    minWidth: 47,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 116
  },
  Text_1378_13894: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13895: {
    width: 318,
    minWidth: 318,
    height: 134,
    minHeight: 134,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 491
  },
  ImageBackground_1378_13896: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13897: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 36
  },
  ImageBackground_1378_13898: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 72
  },
  View_1378_13899: {
    width: 42,
    minWidth: 42,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 7
  },
  Text_1378_13899: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13900: {
    width: 35,
    minWidth: 35,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 44
  },
  Text_1378_13900: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13901: {
    width: 28,
    minWidth: 28,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 283,
    top: 80
  },
  Text_1378_13901: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13902: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 7
  },
  Text_1378_13902: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13903: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 7
  },
  Text_1378_13903: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13904: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_13905: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 6.6669921875,
    resizeMode: "cover"
  },
  View_1378_13906: {
    width: 68,
    minWidth: 68,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 44
  },
  Text_1378_13906: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13907: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 44
  },
  Text_1378_13907: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13908: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 36,
    resizeMode: "cover"
  },
  ImageBackground_1378_13909: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 43.6669921875,
    resizeMode: "cover"
  },
  View_1378_13910: {
    width: 68,
    minWidth: 68,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 80
  },
  Text_1378_13910: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13911: {
    width: 44,
    minWidth: 44,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 80
  },
  Text_1378_13911: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13912: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 74,
    resizeMode: "cover"
  },
  ImageBackground_1378_13913: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 80.6669921875,
    resizeMode: "cover"
  },
  View_1378_13914: {
    width: 43,
    minWidth: 43,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 8
  },
  Text_1378_13914: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13915: {
    width: 45,
    minWidth: 45,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 44
  },
  Text_1378_13915: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13916: {
    width: 29,
    minWidth: 29,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 79
  },
  Text_1378_13916: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13917: {
    width: 24,
    minWidth: 24,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 110
  },
  View_1378_13918: {
    width: 35,
    minWidth: 35,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 279,
    top: 116
  },
  Text_1378_13918: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13919: {
    width: 68,
    minWidth: 68,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 195,
    top: 116
  },
  Text_1378_13919: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13920: {
    width: 44,
    minWidth: 44,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 116
  },
  Text_1378_13920: {
    color: "rgba(50, 47, 47, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13921: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 175,
    top: 109,
    resizeMode: "cover"
  },
  ImageBackground_1378_13922: {
    width: 18.203125,
    minWidth: 18.203125,
    height: 12.135416030883789,
    minHeight: 12.135416030883789,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 94,
    top: 115.6669921875,
    resizeMode: "cover"
  },
  View_1378_13923: {
    width: 47,
    minWidth: 47,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 116
  },
  Text_1378_13923: {
    color: "rgba(20, 19, 19, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13924: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 694,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_13924_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_13924_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_13924_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_13924_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_13924_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_13924_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13924_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_13924_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13924_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_13924_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_13924_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_13924_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_13924_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13924_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13924_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.8905029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_13924_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13924_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_13924_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.2183837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.2364501953125
  },
  ImageBackground_I1378_13924_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_13924_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_13924_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_13924_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_13924_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_13924_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_13924_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.3997802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13924_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_13924_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.1820068359375
  },
  ImageBackground_I1378_13924_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_13924_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_13924_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13924_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_13924_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_13924_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_13924_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_13924_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1258544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_13924_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_13925: {
    width: 80,
    minWidth: 80,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 88
  },
  Text_1378_13925: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13926: {
    width: 21,
    height: 19,
    top: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 327
  },
  ImageBackground_1378_13927: {
    width: 21,
    height: 24,
    top: 85,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26
  },
  View_2: { height: 746 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
