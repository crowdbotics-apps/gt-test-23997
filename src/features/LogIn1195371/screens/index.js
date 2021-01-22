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
        style={styles.ImageBackground_1378_13290}
      />
      <View style={styles.View_1378_13291} />
      <View style={styles.View_1378_13292} />
      <View style={styles.View_1378_13293}>
        <Text style={styles.Text_1378_13293}>Sign Up</Text>
      </View>
      <View style={styles.View_1378_13294}>
        <Text style={styles.Text_1378_13294}>Login</Text>
      </View>
      <View style={styles.View_1378_13295} />
      <View style={styles.View_1378_13296}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_13296_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_13296_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_13296_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_13296_988_6521}
        />
        <View style={styles.View_I1378_13296_988_6522}>
          <Text style={styles.Text_I1378_13296_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_13296_1364_3889}>
          <Text style={styles.Text_I1378_13296_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_13296_988_6523}>
          <Text style={styles.Text_I1378_13296_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_13296_988_6524}
        />
        <View style={styles.View_I1378_13296_1364_676}>
          <View style={styles.View_I1378_13296_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_13296_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_13296_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_13296_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_13296_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_13296_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_13296_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13296_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13296_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13296_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13296_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13296_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_13296_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_13296_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13296_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13296_1364_708}
            />
          </View>
          <View style={styles.View_I1378_13296_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_13296_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_13296_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_13296_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_13296_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_13296_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_13296_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_13296_1364_723}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_13297}>
        <View style={styles.View_1378_13298}>
          <Text style={styles.Text_1378_13298}>Email</Text>
        </View>
        <View style={styles.View_1378_13299} />
        <View style={styles.View_1378_13300}>
          <View style={styles.View_1378_13301}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ec52/c838/84868542a1bd7bc22951fc0980ce44d6"
              }}
              style={styles.ImageBackground_1378_13302}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_13304}>
        <View style={styles.View_I1378_13304_126_983} />
        <View style={styles.View_I1378_13304_126_984}>
          <Text style={styles.Text_I1378_13304_126_984}>Register</Text>
        </View>
      </View>
      <View style={styles.View_1378_13305}>
        <Text style={styles.Text_1378_13305}>Or Sign in with</Text>
      </View>
      <View style={styles.View_1378_13306}>
        <View style={styles.View_1378_13307}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/06b3/f1b3/06ec5962bac54cc215ac34d8fecc2b9d"
            }}
            style={styles.ImageBackground_1378_13308}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/508d/3233/d9816214b7b5cd38969f80ce1050d569"
            }}
            style={styles.ImageBackground_1378_13309}
          />
        </View>
        <View style={styles.View_1378_13310}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e2a5/3f15/6bb08d7aa48f77432599598ebdc9a291"
            }}
            style={styles.ImageBackground_1378_13311}
          />
          <View style={styles.View_1378_13312}>
            <View style={styles.View_1378_13313}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/80e9/9cb5/80b0aec628db42afc242361ca1a18bab"
                }}
                style={styles.ImageBackground_1378_13314}
              />
            </View>
            <View style={styles.View_1378_13316}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bf97/ebf7/2c3745fe952dae0c60ffc589d6ccc5a3"
                }}
                style={styles.ImageBackground_1378_13317}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_13290: {
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
  View_1378_13291: {
    width: 342,
    minWidth: 342,
    height: 378,
    minHeight: 378,
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
  View_1378_13292: {
    width: 171,
    minWidth: 171,
    height: 45,
    minHeight: 45,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 187,
    top: 72,
    backgroundColor: "rgba(0, 42, 173, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_13293: {
    width: 52,
    minWidth: 52,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241,
    top: 88
  },
  Text_1378_13293: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13294: {
    width: 36,
    minWidth: 36,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 89
  },
  Text_1378_13294: {
    color: "rgba(0, 42, 173, 1)",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13295: {
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
  View_1378_13296: {
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
  ImageBackground_I1378_13296_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_13296_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_13296_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_13296_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_13296_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_13296_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13296_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_13296_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13296_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_13296_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_13296_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_13296_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_13296_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13296_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13296_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890472412109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_13296_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13296_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.81707763671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_13296_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218414306640625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_13296_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_13296_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890899658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_13296_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.81817626953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_13296_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.145477294921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_13296_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_13296_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309234619140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_13296_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39984130859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13296_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_13296_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_13296_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_13296_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_13296_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13296_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125701904296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_13296_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.8561553955078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_13296_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000274658203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_13296_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565826416015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_13296_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.12591552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_13296_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091400146484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_1378_13297: {
    width: 292,
    minWidth: 292,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41,
    top: 192
  },
  View_1378_13298: {
    width: 35,
    minWidth: 35,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 14
  },
  Text_1378_13298: {
    color: "rgba(142, 142, 142, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13299: {
    width: 292,
    minWidth: 292,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(102, 104, 109, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_13300: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_13301: {
    width: 20,
    height: 15.234375,
    top: 2.3828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_13302: {
    width: 20,
    height: 15.234375,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_13304: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 266,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I1378_13304_126_983: {
    flexGrow: 1,
    width: 134,
    height: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 20.693439483642578,
    borderTopRightRadius: 20.693439483642578,
    borderBottomLeftRadius: 20.693439483642578,
    borderBottomRightRadius: 20.693439483642578
  },
  View_I1378_13304_126_984: {
    flexGrow: 1,
    width: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 13
  },
  Text_I1378_13304_126_984: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_13305: {
    width: 89.5,
    minWidth: 89.5,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 142.25,
    top: 348
  },
  Text_1378_13305: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13306: {
    width: 114,
    minWidth: 114,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 377
  },
  View_1378_13307: {
    width: 49,
    minWidth: 49,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 65,
    top: 0
  },
  ImageBackground_1378_13308: {
    width: 49,
    minWidth: 49,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13309: {
    width: 10.812909126281738,
    height: 20,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.59326171875
  },
  View_1378_13310: {
    width: 49,
    minWidth: 49,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_13311: {
    width: 49,
    minWidth: 49,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_13312: {
    width: 29,
    minWidth: 29,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 10,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_13313: {
    width: 9.0625,
    height: 9.0625,
    top: 9.0625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.9375
  },
  ImageBackground_1378_13314: {
    width: 9.0625,
    height: 9.0625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_13316: {
    width: 18.125,
    height: 18.125,
    top: 5.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_13317: {
    width: 18.125,
    height: 18.125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
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
