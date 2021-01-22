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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/199f/a1b7/e57b0a1f00abc95865805ec8b4dc42f0"
        }}
        style={styles.ImageBackground_1378_14116}
      />
      <View style={styles.View_1378_14117} />
      <View style={styles.View_1378_14118} />
      <View style={styles.View_1378_14119}>
        <View style={styles.View_1378_14120}>
          <View style={styles.View_1378_14121}>
            <View style={styles.View_1378_14122}>
              <View style={styles.View_1378_14123}>
                <Text style={styles.Text_1378_14123}>Upload image</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1378_14124}>
        <View style={styles.View_1378_14125} />
        <View style={styles.View_1378_14126}>
          <Text style={styles.Text_1378_14126}>Select National Team</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e16d/6681/c5ee21b78b97e71e1d10b0556cb0f25c"
          }}
          style={styles.ImageBackground_1378_14127}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ebb/c008/5c34099e80030a3f972fcc0b05ca6cc7"
          }}
          style={styles.ImageBackground_1378_14129}
        />
      </View>
      <View style={styles.View_1378_14131} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1704/1566/83ae26022b393a8ac54925b3b657ecf7"
        }}
        style={styles.ImageBackground_1378_14132}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ad1/f6e8/5356d99e0403e00417383c8b23fb5ed6"
        }}
        style={styles.ImageBackground_1378_14133}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5e91/9bf7/56e24cfeb83e9cb6582105a299829808"
        }}
        style={styles.ImageBackground_1378_14134}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a8c/3c79/b94bfa7594b1d00f3694526a88d4740a"
        }}
        style={styles.ImageBackground_1378_14135}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/244a/de41/33321ad08167beebd256c8fa7863d4ee"
        }}
        style={styles.ImageBackground_1378_14136}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a536/faa5/41f82f06da964a9112f5b4fa43b793b9"
        }}
        style={styles.ImageBackground_1378_14137}
      />
      <View style={styles.View_1378_14138}>
        <Text style={styles.Text_1378_14138}>Greece</Text>
      </View>
      <View style={styles.View_1378_14139}>
        <Text style={styles.Text_1378_14139}>Finland</Text>
      </View>
      <View style={styles.View_1378_14140}>
        <Text style={styles.Text_1378_14140}>Spain</Text>
      </View>
      <View style={styles.View_1378_14141}>
        <Text style={styles.Text_1378_14141}>Serbia</Text>
      </View>
      <View style={styles.View_1378_14142}>
        <Text style={styles.Text_1378_14142}>Germany</Text>
      </View>
      <View style={styles.View_1378_14143}>
        <Text style={styles.Text_1378_14143}>Italy</Text>
      </View>
      <View style={styles.View_1378_14144}>
        <Text style={styles.Text_1378_14144}>Moldova</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2427/128e/fa8d445d6abf1f27db68bad8e95503e2"
        }}
        style={styles.ImageBackground_1378_14145}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0043/b1a8/cf9f9420581ec920766dc75b0b6371ea"
        }}
        style={styles.ImageBackground_1378_14146}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ac6/a7be/2911a1141a781b9715f8bd45afae17a6"
        }}
        style={styles.ImageBackground_1378_14147}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2531/ffbd/f1b158ba9077ea6c66bff38584f1efdd"
        }}
        style={styles.ImageBackground_1378_14148}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/96c5/e0c1/e06396d4ce7c9484deb36dc480b6062b"
        }}
        style={styles.ImageBackground_1378_14149}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a1ac/963f/91e817fb6a1e314c423c65ac9953a99a"
        }}
        style={styles.ImageBackground_1378_14150}
      />
      <View style={styles.View_1378_14151}>
        <Text style={styles.Text_1378_14151}>England</Text>
      </View>
      <View style={styles.View_1378_14152}>
        <Text style={styles.Text_1378_14152}>Austria</Text>
      </View>
      <View style={styles.View_1378_14153}>
        <Text style={styles.Text_1378_14153}>Norway</Text>
      </View>
      <View style={styles.View_1378_14154}>
        <Text style={styles.Text_1378_14154}>Switzerland</Text>
      </View>
      <View style={styles.View_1378_14155}>
        <Text style={styles.Text_1378_14155}>Scotland</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b6f/c067/cc8efab265b86aad82c7a964d872432c"
        }}
        style={styles.ImageBackground_1378_14156}
      />
      <View style={styles.View_1378_14160}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_14160_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_14160_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_14160_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_14160_988_6521}
        />
        <View style={styles.View_I1378_14160_988_6522}>
          <Text style={styles.Text_I1378_14160_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_14160_1364_3889}>
          <Text style={styles.Text_I1378_14160_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_14160_988_6523}>
          <Text style={styles.Text_I1378_14160_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_14160_988_6524}
        />
        <View style={styles.View_I1378_14160_1364_676}>
          <View style={styles.View_I1378_14160_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_14160_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_14160_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_14160_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_14160_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_14160_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_14160_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14160_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14160_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14160_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14160_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14160_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_14160_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_14160_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14160_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14160_1364_708}
            />
          </View>
          <View style={styles.View_I1378_14160_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_14160_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_14160_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_14160_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_14160_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_14160_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_14160_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_14160_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_14116: {
    width: 696,
    minWidth: 696,
    height: 765,
    minHeight: 765,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -161,
    top: 0
  },
  View_1378_14117: {
    width: 342,
    minWidth: 342,
    height: 593,
    minHeight: 593,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_14118: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 204,
    top: 467,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_14119: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 158,
    top: 294
  },
  View_1378_14120: {
    width: 74,
    height: 15,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_14121: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14122: {
    width: 74,
    minWidth: 74,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14123: {
    width: 74,
    minWidth: 74,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_14123: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14124: {
    width: 342,
    minWidth: 342,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72
  },
  View_1378_14125: {
    width: 342,
    minWidth: 342,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 42, 173, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_14126: {
    width: 134,
    minWidth: 134,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 104,
    top: 15
  },
  Text_1378_14126: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14127: {
    width: 21,
    height: 21,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294
  },
  ImageBackground_1378_14129: {
    width: 21,
    height: 21,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27
  },
  View_1378_14131: {
    width: 342,
    minWidth: 342,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 291,
    backgroundColor: "rgba(90, 131, 255, 1)"
  },
  ImageBackground_1378_14132: {
    width: 32,
    minWidth: 32,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 143,
    resizeMode: "cover"
  },
  ImageBackground_1378_14133: {
    width: 32,
    minWidth: 32,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 178,
    resizeMode: "cover"
  },
  ImageBackground_1378_14134: {
    width: 31,
    minWidth: 31,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 217,
    resizeMode: "cover"
  },
  ImageBackground_1378_14135: {
    width: 32,
    minWidth: 32,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 259,
    resizeMode: "cover"
  },
  ImageBackground_1378_14136: {
    width: 32,
    minWidth: 32,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 300,
    resizeMode: "cover"
  },
  ImageBackground_1378_14137: {
    width: 34,
    minWidth: 34,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 336,
    resizeMode: "cover"
  },
  View_1378_14138: {
    width: 44,
    minWidth: 44,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 144
  },
  Text_1378_14138: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14139: {
    width: 46,
    minWidth: 46,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 339
  },
  Text_1378_14139: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14140: {
    width: 35,
    minWidth: 35,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 183
  },
  Text_1378_14140: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14141: {
    width: 40,
    minWidth: 40,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 222
  },
  Text_1378_14141: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14142: {
    width: 56,
    minWidth: 56,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 261
  },
  Text_1378_14142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14143: {
    width: 27,
    minWidth: 27,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 300
  },
  Text_1378_14143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14144: {
    width: 54,
    minWidth: 54,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 378
  },
  Text_1378_14144: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14145: {
    width: 35,
    minWidth: 35,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 373,
    resizeMode: "cover"
  },
  ImageBackground_1378_14146: {
    width: 35,
    minWidth: 35,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 575,
    resizeMode: "cover"
  },
  ImageBackground_1378_14147: {
    width: 33,
    minWidth: 33,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 538,
    resizeMode: "cover"
  },
  ImageBackground_1378_14148: {
    width: 34,
    minWidth: 34,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 456,
    resizeMode: "cover"
  },
  ImageBackground_1378_14149: {
    width: 34,
    minWidth: 34,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 498,
    resizeMode: "cover"
  },
  ImageBackground_1378_14150: {
    width: 35,
    minWidth: 35,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 413,
    resizeMode: "cover"
  },
  View_1378_14151: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 578
  },
  Text_1378_14151: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14152: {
    width: 45,
    minWidth: 45,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 417
  },
  Text_1378_14152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14153: {
    width: 48,
    minWidth: 48,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 461
  },
  Text_1378_14153: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14154: {
    width: 73,
    minWidth: 73,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 500
  },
  Text_1378_14154: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14155: {
    width: 55,
    minWidth: 55,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 86,
    top: 539
  },
  Text_1378_14155: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14156: {
    width: 52,
    minWidth: 52,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 630
  },
  View_1378_14160: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 698,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_14160_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_14160_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_14160_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_14160_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_14160_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_14160_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14160_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_14160_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14160_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_14160_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_14160_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_14160_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_14160_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14160_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14160_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890472412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_14160_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_14160_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_14160_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218414306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.2364501953125
  },
  ImageBackground_I1378_14160_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.3260498046875
  },
  ImageBackground_I1378_14160_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890899658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_14160_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.4290771484375
  },
  ImageBackground_I1378_14160_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.145477294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_14160_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.5999755859375
  },
  ImageBackground_I1378_14160_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8389892578125
  },
  ImageBackground_I1378_14160_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_14160_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.6907958984375
  },
  ImageBackground_I1378_14160_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.1820068359375
  },
  ImageBackground_I1378_14160_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.7122802734375
  },
  View_I1378_14160_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.7757568359375
  },
  ImageBackground_I1378_14160_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14160_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125701904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.1895751953125
  },
  ImageBackground_I1378_14160_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.8561553955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_14160_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.5762939453125
  },
  ImageBackground_I1378_14160_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565826416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_14160_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.6429443359375
  },
  ImageBackground_I1378_14160_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091400146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_2: { height: 750 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
