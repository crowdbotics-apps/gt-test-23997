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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f86/62d1/1ec46bc21ab1f654576876de2f7b2e61"
        }}
        style={styles.ImageBackground_1378_13578}
      />
      <View style={styles.View_1378_13579}>
        <View style={styles.View_I1378_13579_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_13579_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_13579_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_13579_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_13579_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_13579_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_13579_616_1412}
        />
      </View>
      <View style={styles.View_1378_13580} />
      <View style={styles.View_1378_13581} />
      <View style={styles.View_1378_13582} />
      <View style={styles.View_1378_13583} />
      <View style={styles.View_1378_13584} />
      <View style={styles.View_1378_13585} />
      <View style={styles.View_1378_13586}>
        <Text style={styles.Text_1378_13586}>league of champions ticket</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a995/0c3d/96c92a9b19b68ded47edb3674558a47c"
        }}
        style={styles.ImageBackground_1378_13587}
      />
      <View style={styles.View_1378_13588}>
        <Text style={styles.Text_1378_13588}>Nike jacket</Text>
      </View>
      <View style={styles.View_1378_13589}>
        <Text style={styles.Text_1378_13589}>Nike match ball</Text>
      </View>
      <View style={styles.View_1378_13590}>
        <Text style={styles.Text_1378_13590}>Football bag</Text>
      </View>
      <View style={styles.View_1378_13591}>
        <Text style={styles.Text_1378_13591}>UEFA league of champions mug</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/764a/26ba/1f1601850e884ab2dc595104fd624e59"
        }}
        style={styles.ImageBackground_1378_13592}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb9c/dd3c/821c5e50389e5cd81bfe1749e74a1ef4"
        }}
        style={styles.ImageBackground_1378_13593}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/acea/022b/66fb0b895ca6aaf50abaa277b942e21a"
        }}
        style={styles.ImageBackground_1378_13594}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7757/b3de/fb26582532bf82f872fa3729399d2c5d"
        }}
        style={styles.ImageBackground_1378_13595}
      />
      <View style={styles.View_1378_13596}>
        <Text style={styles.Text_1378_13596}>2000 P</Text>
      </View>
      <View style={styles.View_1378_13597}>
        <Text style={styles.Text_1378_13597}>1000 P</Text>
      </View>
      <View style={styles.View_1378_13598}>
        <Text style={styles.Text_1378_13598}>700 P</Text>
      </View>
      <View style={styles.View_1378_13599} />
      <View style={styles.View_1378_13600}>
        <Text style={styles.Text_1378_13600}>Nike match ball</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7757/b3de/fb26582532bf82f872fa3729399d2c5d"
        }}
        style={styles.ImageBackground_1378_13601}
      />
      <View style={styles.View_1378_13602}>
        <Text style={styles.Text_1378_13602}>700 P</Text>
      </View>
      <View style={styles.View_1378_13603} />
      <View style={styles.View_1378_13604}>
        <Text style={styles.Text_1378_13604}>Nike match ball</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7757/b3de/fb26582532bf82f872fa3729399d2c5d"
        }}
        style={styles.ImageBackground_1378_13605}
      />
      <View style={styles.View_1378_13606}>
        <Text style={styles.Text_1378_13606}>700 P</Text>
      </View>
      <View style={styles.View_1378_13607}>
        <Text style={styles.Text_1378_13607}>150 P</Text>
      </View>
      <View style={styles.View_1378_13608}>
        <Text style={styles.Text_1378_13608}>900 P</Text>
      </View>
      <View style={styles.View_1378_13609}>
        <View style={styles.View_1378_13610} />
        <View style={styles.View_1378_13611}>
          <View style={styles.View_1378_13612}>
            <View style={styles.View_1378_13613}>
              <View style={styles.View_1378_13614}>
                <Text style={styles.Text_1378_13614}>Exchange</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_1378_13615}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_13615_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_13615_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_13615_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_13615_988_6521}
        />
        <View style={styles.View_I1378_13615_988_6522}>
          <Text style={styles.Text_I1378_13615_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_13615_1364_3889}>
          <Text style={styles.Text_I1378_13615_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_13615_988_6523}>
          <Text style={styles.Text_I1378_13615_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_13615_988_6524}
        />
        <View style={styles.View_I1378_13615_1364_676}>
          <View style={styles.View_I1378_13615_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_13615_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_13615_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_13615_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_13615_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_13615_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_13615_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13615_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13615_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_13615_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13615_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_13615_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_13615_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_13615_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13615_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_13615_1364_708}
            />
          </View>
          <View style={styles.View_I1378_13615_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_13615_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_13615_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_13615_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_13615_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_13615_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_13615_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_13615_1364_723}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13616}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13617}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13618}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13619}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13620}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13621}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0732/2ee7/7ff986a3efe488ed8bed4cb109cd0b28"
        }}
        style={styles.ImageBackground_1378_13622}
      />
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  ImageBackground_1378_13578: {
    width: 696,
    minWidth: 696,
    height: 1621,
    minHeight: 1621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -123,
    top: -528
  },
  View_1378_13579: {
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
  View_I1378_13579_200_649: {
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
  ImageBackground_I1378_13579_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_13579_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_13579_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_13579_282_5147: {
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
  ImageBackground_I1378_13579_282_5148: {
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
  ImageBackground_I1378_13579_616_1412: {
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
  View_1378_13580: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 63,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13581: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 182,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13582: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 301,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13583: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 420,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13584: {
    width: 367,
    minWidth: 367,
    height: 177,
    minHeight: 177,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 539,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13585: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 95,
    top: 1077,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_13586: {
    width: 310.8164978027344,
    minWidth: 310.8164978027344,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 95
  },
  Text_1378_13586: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13587: {
    width: 79,
    minWidth: 79,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 275,
    top: 88,
    resizeMode: "cover"
  },
  View_1378_13588: {
    width: 106.27919006347656,
    minWidth: 106.27919006347656,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 214
  },
  Text_1378_13588: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13589: {
    width: 141.3713836669922,
    minWidth: 141.3713836669922,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 452
  },
  Text_1378_13589: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13590: {
    width: 113.2976303100586,
    minWidth: 113.2976303100586,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 333
  },
  Text_1378_13590: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13591: {
    width: 207,
    minWidth: 207,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 570
  },
  Text_1378_13591: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13592: {
    width: 65.17120361328125,
    minWidth: 65.17120361328125,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287.279296875,
    top: 203,
    resizeMode: "cover"
  },
  ImageBackground_1378_13593: {
    width: 80,
    minWidth: 80,
    height: 80,
    minHeight: 80,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 555,
    resizeMode: "cover"
  },
  ImageBackground_1378_13594: {
    width: 100.26338958740234,
    minWidth: 100.26338958740234,
    height: 66,
    minHeight: 66,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    top: 321,
    resizeMode: "cover"
  },
  ImageBackground_1378_13595: {
    width: 57.15013122558594,
    minWidth: 57.15013122558594,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 444,
    resizeMode: "cover"
  },
  View_1378_13596: {
    width: 52,
    minWidth: 52,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 123
  },
  Text_1378_13596: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13597: {
    width: 52,
    minWidth: 52,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 241
  },
  Text_1378_13597: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13598: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 481
  },
  Text_1378_13598: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13599: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 725,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13600: {
    width: 141.3713836669922,
    minWidth: 141.3713836669922,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 747
  },
  Text_1378_13600: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13601: {
    width: 57.15013122558594,
    minWidth: 57.15013122558594,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 750,
    resizeMode: "cover"
  },
  View_1378_13602: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 775
  },
  Text_1378_13602: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13603: {
    width: 367,
    minWidth: 367,
    height: 110,
    minHeight: 110,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 844,
    backgroundColor: "rgba(255, 249, 249, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_13604: {
    width: 141.3713836669922,
    minWidth: 141.3713836669922,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 870
  },
  Text_1378_13604: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_13605: {
    width: 57.15013122558594,
    minWidth: 57.15013122558594,
    height: 57,
    minHeight: 57,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 292,
    top: 870,
    resizeMode: "cover"
  },
  View_1378_13606: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 899
  },
  Text_1378_13606: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13607: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 598
  },
  Text_1378_13607: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13608: {
    width: 42,
    minWidth: 42,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 360
  },
  Text_1378_13608: {
    color: "rgba(4, 24, 85, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_13609: {
    width: 192,
    minWidth: 192,
    height: 47,
    minHeight: 47,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 91.5,
    top: 637
  },
  View_1378_13610: {
    width: 192,
    height: 47,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  View_1378_13611: {
    width: 76,
    height: 20,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 58
  },
  View_1378_13612: {
    width: 76,
    minWidth: 76,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_13613: {
    width: 76,
    minWidth: 76,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_13614: {
    width: 76,
    minWidth: 76,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_13614: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_13615: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 997,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_13615_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_13615_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_13615_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_13615_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_13615_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_13615_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13615_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_13615_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_13615_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_13615_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_13615_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_13615_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_13615_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13615_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13615_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.890380859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_13615_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13615_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_13615_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.218505859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_13615_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3095703125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_13615_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_13615_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_13615_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_13615_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_13615_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.309326171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_13615_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.39990234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_13615_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_13615_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_13615_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_13615_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_13615_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_13615_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_13615_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_13615_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.199951171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_13615_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.856689453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_13615_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1259765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_13615_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.509033203125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  ImageBackground_1378_13616: {
    width: 21,
    height: 26,
    top: 89,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20
  },
  ImageBackground_1378_13617: {
    width: 21,
    height: 26,
    top: 210,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  ImageBackground_1378_13618: {
    width: 21,
    height: 26,
    top: 326,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  ImageBackground_1378_13619: {
    width: 21,
    height: 26,
    top: 448,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  ImageBackground_1378_13620: {
    width: 21,
    height: 26,
    top: 564,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  ImageBackground_1378_13621: {
    width: 21,
    height: 26,
    top: 744,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  ImageBackground_1378_13622: {
    width: 21,
    height: 26,
    top: 866,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19
  },
  View_2: { height: 1049 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
