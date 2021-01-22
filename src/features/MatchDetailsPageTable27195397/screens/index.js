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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c26/bf00/995512801fecd6c6a79e8b620eb5cf53"
        }}
        style={styles.ImageBackground_1378_16056}
      />
      <View style={styles.View_1378_16057} />
      <View style={styles.View_1378_16058}>
        <View style={styles.View_1378_16059} />
        <View style={styles.View_1378_16060} />
        <View style={styles.View_1378_16061}>
          <Text style={styles.Text_1378_16061}>DRAW № 496</Text>
        </View>
      </View>
      <View style={styles.View_1378_16062}>
        <View style={styles.View_I1378_16062_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_16062_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_16062_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_16062_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_16062_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_16062_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_16062_616_1412}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/67a5/a84931d3103aef716d5bf8875c5038eb"
        }}
        style={styles.ImageBackground_1378_16063}
      />
      <View style={styles.View_1378_16064} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e130/d3a3/e897a3be81c877435d0ec69df3e50181"
        }}
        style={styles.ImageBackground_1378_16065}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c60a/83d8/e9a63d9d229c85b9a58ec5294a739470"
        }}
        style={styles.ImageBackground_1378_16066}
      />
      <View style={styles.View_1378_16067}>
        <Text style={styles.Text_1378_16067}>Manchester </Text>
      </View>
      <View style={styles.View_1378_16068}>
        <Text style={styles.Text_1378_16068}>Liverpool</Text>
      </View>
      <View style={styles.View_1378_16069}>
        <Text style={styles.Text_1378_16069}>1 : 0</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e1/133a/dcc8bc05cd97084a92d643819f3469eb"
        }}
        style={styles.ImageBackground_1378_16070}
      />
      <View style={styles.View_1378_16071}>
        <Text style={styles.Text_1378_16071}>Liverpool</Text>
      </View>
      <View style={styles.View_1378_16072}>
        <Text style={styles.Text_1378_16072}>Matches</Text>
      </View>
      <View style={styles.View_1378_16073}>
        <Text style={styles.Text_1378_16073}>Table</Text>
      </View>
      <View style={styles.View_1378_16074}>
        <Text style={styles.Text_1378_16074}>Table</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d0/e18f/d42b28f0a7fd2acab3cc0fc4d248cb80"
        }}
        style={styles.ImageBackground_1378_16075}
      />
      <View style={styles.View_1378_16076}>
        <Text style={styles.Text_1378_16076}>Team</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca1/6023/0f2bb76425948e669d25dd93cda66b9e"
        }}
        style={styles.ImageBackground_1378_16077}
      />
      <View style={styles.View_1378_16078} />
      <View style={styles.View_1378_16079}>
        <Text style={styles.Text_1378_16079}>Match Facts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_16080}
      />
      <View style={styles.View_1378_16081} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_16082}
      />
      <View style={styles.View_1378_16083} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_16084}
      />
      <View style={styles.View_1378_16085}>
        <View style={styles.View_1378_16086}>
          <Text style={styles.Text_1378_16086}>John Achterberg</Text>
        </View>
        <View style={styles.View_1378_16087}>
          <Text style={styles.Text_1378_16087}>Andrew Massey</Text>
        </View>
        <View style={styles.View_1378_16088}>
          <Text style={styles.Text_1378_16088}>Lee Radcliffe</Text>
        </View>
        <View style={styles.View_1378_16089}>
          <Text style={styles.Text_1378_16089}>Phil Jones</Text>
        </View>
        <View style={styles.View_1378_16090}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76c/96b4/4d9ac2c4888686b78a3fcebec981038a"
            }}
            style={styles.ImageBackground_1378_16091}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b1e/4bb5/37efe7a739a966ea6743bc1b6f0de6ed"
            }}
            style={styles.ImageBackground_1378_16092}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0392/6240/1afe8edf913d79bfde6ba89838288a81"
            }}
            style={styles.ImageBackground_1378_16099}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fb/f601/3aaeed4a82eb81533cf55fcc9ff7d276"
          }}
          style={styles.ImageBackground_1378_16106}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fb/f601/3aaeed4a82eb81533cf55fcc9ff7d276"
          }}
          style={styles.ImageBackground_1378_16107}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a800/a657/9d6b2b672de569ca9f387d6bdadac69a"
          }}
          style={styles.ImageBackground_1378_16108}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a800/a657/9d6b2b672de569ca9f387d6bdadac69a"
          }}
          style={styles.ImageBackground_1378_16109}
        />
        <View style={styles.View_1378_16110}>
          <Text style={styles.Text_1378_16110}>16’</Text>
        </View>
        <View style={styles.View_1378_16111}>
          <Text style={styles.Text_1378_16111}>21’</Text>
        </View>
        <View style={styles.View_1378_16112}>
          <Text style={styles.Text_1378_16112}>34’</Text>
        </View>
        <View style={styles.View_1378_16113}>
          <Text style={styles.Text_1378_16113}>37’</Text>
        </View>
        <View style={styles.View_1378_16114}>
          <Text style={styles.Text_1378_16114}>42’</Text>
        </View>
        <View style={styles.View_1378_16115}>
          <Text style={styles.Text_1378_16115}>51’</Text>
        </View>
        <View style={styles.View_1378_16116}>
          <Text style={styles.Text_1378_16116}>61’</Text>
        </View>
        <View style={styles.View_1378_16117}>
          <Text style={styles.Text_1378_16117}> Ashley Young</Text>
        </View>
        <View style={styles.View_1378_16118}>
          <Text style={styles.Text_1378_16118}> Diogo Dalot</Text>
        </View>
        <View style={styles.View_1378_16119}>
          <Text style={styles.Text_1378_16119}>Scott McAuley</Text>
        </View>
        <View style={styles.View_1378_16120}>
          <View style={styles.View_1378_16121}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/a5d5/92d058afdd79b3ce6bbcb8232ac24917"
              }}
              style={styles.ImageBackground_1378_16122}
            />
          </View>
          <View style={styles.View_1378_16124}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8b/dd12/a2428f05e3f3a2f07939884229b6a8d3"
              }}
              style={styles.ImageBackground_1378_16125}
            />
          </View>
        </View>
        <View style={styles.View_1378_16127}>
          <View style={styles.View_1378_16128}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/a5d5/92d058afdd79b3ce6bbcb8232ac24917"
              }}
              style={styles.ImageBackground_1378_16129}
            />
          </View>
          <View style={styles.View_1378_16131}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8b/dd12/a2428f05e3f3a2f07939884229b6a8d3"
              }}
              style={styles.ImageBackground_1378_16132}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_16134}>
        <Text style={styles.Text_1378_16134}>Match details</Text>
      </View>
      <View style={styles.View_1378_16135}>
        <Text style={styles.Text_1378_16135}>Line Up</Text>
      </View>
      <View style={styles.View_1378_16136}>
        <Text style={styles.Text_1378_16136}>52%</Text>
      </View>
      <View style={styles.View_1378_16137}>
        <Text style={styles.Text_1378_16137}>48%</Text>
      </View>
      <View style={styles.View_1378_16138}>
        <Text style={styles.Text_1378_16138}>
          Shots on goal Clearance Missed Shots Goalkeeper saves Number of
          offside
        </Text>
      </View>
      <View style={styles.View_1378_16139}>
        <Text style={styles.Text_1378_16139}>2 4 2 3 3</Text>
      </View>
      <View style={styles.View_1378_16140}>
        <Text style={styles.Text_1378_16140}>1 3 1 2 3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a0/74b9/99e7ae079434d49ac66054bd1d8c593e"
        }}
        style={styles.ImageBackground_1378_16141}
      />
      <View style={styles.View_1378_16142}>
        <Text style={styles.Text_1378_16142}>Main team</Text>
      </View>
      <View style={styles.View_1378_16143}>
        <Text style={styles.Text_1378_16143}>Main team</Text>
      </View>
      <View style={styles.View_1378_16144}>
        <Text style={styles.Text_1378_16144}>Reserve</Text>
      </View>
      <View style={styles.View_1378_16145}>
        <Text style={styles.Text_1378_16145}>Reserve</Text>
      </View>
      <View style={styles.View_1378_16146}>
        <View style={styles.View_1378_16147}>
          <Text style={styles.Text_1378_16147}>
            David De Gea Marcos Rojo Victor Lindelöf Eric Bailly Phil Jones
            Marcos Rojo Chris Smalling Ashley Young Diogo Dalot Luke Shaw Juan
            Mata
          </Text>
        </View>
        <View style={styles.View_1378_16148}>
          <Text style={styles.Text_1378_16148}>1 9 6 13 5 8 4 2 15 11 3 </Text>
        </View>
      </View>
      <View style={styles.View_1378_16149}>
        <Text style={styles.Text_1378_16149}>
          Alexis Sánchez Romelu Lukaku Anthony Martial Marcus Rashford Mason
          Greenwood
        </Text>
      </View>
      <View style={styles.View_1378_16150}>
        <Text style={styles.Text_1378_16150}>22 26 19 14 18</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c4f/60bc/fa467ed863694c741a50bd6c555df5a4"
        }}
        style={styles.ImageBackground_1378_16151}
      />
      <View style={styles.View_1378_16152}>
        <Text style={styles.Text_1378_16152}>
          Liverpool Chelsea Manchester City Newcastle United Manchester United
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/67c5/45bd/e5eb065e1cee0fddda2cf1913f5bbd79"
        }}
        style={styles.ImageBackground_1378_16153}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc5f/07f5/f12e2319d6752931a177fad2c96aec5d"
        }}
        style={styles.ImageBackground_1378_16154}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b11f/028b/a1a89a22217a66ed71d41b608e7d9a12"
        }}
        style={styles.ImageBackground_1378_16155}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f66a/a566/5bd56be33bba7116df734094531e6107"
        }}
        style={styles.ImageBackground_1378_16156}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b21/6d20/bfe5bb72e735f0f2332c12904b87bc65"
        }}
        style={styles.ImageBackground_1378_16157}
      />
      <View style={styles.View_1378_16158}>
        <Text style={styles.Text_1378_16158}>1 2 3 4 5</Text>
      </View>
      <View style={styles.View_1378_16159}>
        <Text style={styles.Text_1378_16159}>13 14 13 14 13</Text>
      </View>
      <View style={styles.View_1378_16160}>
        <Text style={styles.Text_1378_16160}>16 13 5 9 8</Text>
      </View>
      <View style={styles.View_1378_16161}>
        <Text style={styles.Text_1378_16161}>31 27 25 29 22</Text>
      </View>
      <View style={styles.View_1378_16162}>
        <Text style={styles.Text_1378_16162}>PI</Text>
      </View>
      <View style={styles.View_1378_16163}>
        <Text style={styles.Text_1378_16163}>GD</Text>
      </View>
      <View style={styles.View_1378_16164}>
        <Text style={styles.Text_1378_16164}>PTS</Text>
      </View>
      <View style={styles.View_1378_16165}>
        <Text style={styles.Text_1378_16165}>
          Jürgen Klopp Peter Krawietz Pepijn Lijnders John Achterberg Jack
          Robinson Andreas Kornmayer Andrew Massey Philipp Jacobsen Conall
          Murtagh Paul Small Lee Radcliffe
        </Text>
      </View>
      <View style={styles.View_1378_16166}>
        <Text style={styles.Text_1378_16166}>2 7 1 6 10 3 4 11 14 5 8</Text>
      </View>
      <View style={styles.View_1378_16167}>
        <Text style={styles.Text_1378_16167}>
          Mona Nemmer Mark Leyland Greg Mathieson James French Scott McAuley
        </Text>
      </View>
      <View style={styles.View_1378_16168}>
        <Text style={styles.Text_1378_16168}>18 15 21 28 17</Text>
      </View>
      <View style={styles.View_1378_16169}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_16169_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_16169_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_16169_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_16169_988_6521}
        />
        <View style={styles.View_I1378_16169_988_6522}>
          <Text style={styles.Text_I1378_16169_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_16169_1364_3889}>
          <Text style={styles.Text_I1378_16169_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_16169_988_6523}>
          <Text style={styles.Text_I1378_16169_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_16169_988_6524}
        />
        <View style={styles.View_I1378_16169_1364_676}>
          <View style={styles.View_I1378_16169_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_16169_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_16169_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_16169_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_16169_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_16169_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_16169_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16169_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16169_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16169_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16169_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16169_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_16169_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_16169_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16169_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16169_1364_708}
            />
          </View>
          <View style={styles.View_I1378_16169_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_16169_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_16169_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_16169_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_16169_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_16169_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_16169_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_16169_1364_723}
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
  ImageBackground_1378_16056: {
    width: 696,
    minWidth: 696,
    height: 2215,
    minHeight: 2215,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -88,
    top: -388
  },
  View_1378_16057: {
    width: 377,
    minWidth: 377,
    height: 1655,
    minHeight: 1655,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 73,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_16058: {
    width: 342,
    minWidth: 342,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 73,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_16059: {
    width: 21,
    height: 15.400001525878906,
    top: 8.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16060: {
    width: 21,
    height: 15.400001525878906,
    top: 8.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16061: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 12
  },
  Text_1378_16061: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16062: {
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
  View_I1378_16062_200_649: {
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
  ImageBackground_I1378_16062_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_16062_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_16062_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_16062_282_5147: {
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
  ImageBackground_I1378_16062_282_5148: {
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
  ImageBackground_I1378_16062_616_1412: {
    flexGrow: 1,
    width: 115.28089904785156,
    height: 24.60260009765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 7.88629150390625,
    resizeMode: "cover"
  },
  ImageBackground_1378_16063: {
    width: 933,
    minWidth: 933,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -120,
    top: 109
  },
  View_1378_16064: {
    width: 376,
    minWidth: 376,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 109,
    backgroundColor: "rgba(0, 27, 122, 1)",
    opacity: 0.4000000059604645
  },
  ImageBackground_1378_16065: {
    width: 40,
    minWidth: 40,
    height: 43,
    minHeight: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 569,
    top: 127,
    resizeMode: "cover"
  },
  ImageBackground_1378_16066: {
    width: 37,
    minWidth: 37,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 125,
    resizeMode: "cover"
  },
  View_1378_16067: {
    width: 97,
    minWidth: 97,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 134
  },
  Text_1378_16067: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16068: {
    width: 84,
    minWidth: 84,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 621,
    top: 137
  },
  Text_1378_16068: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16069: {
    width: 35,
    minWidth: 35,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 135
  },
  Text_1378_16069: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16070: {
    width: 31,
    minWidth: 31,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 126,
    resizeMode: "cover"
  },
  View_1378_16071: {
    width: 76,
    minWidth: 76,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 134
  },
  Text_1378_16071: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16072: {
    width: 55,
    minWidth: 55,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 202
  },
  Text_1378_16072: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16073: {
    width: 34,
    minWidth: 34,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 202
  },
  Text_1378_16073: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16074: {
    width: 44,
    minWidth: 44,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 555,
    top: 213
  },
  Text_1378_16074: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16075: {
    width: 176,
    minWidth: 176,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 200,
    top: 224
  },
  View_1378_16076: {
    width: 26,
    minWidth: 26,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39,
    top: 248
  },
  Text_1378_16076: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_16077: {
    width: 376,
    minWidth: 376,
    height: 0.000032870964787434787,
    minHeight: 0.000032870964787434787,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 268
  },
  View_1378_16078: {
    width: 376,
    minWidth: 376,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 460,
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  View_1378_16079: {
    width: 78,
    minWidth: 78,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 472
  },
  Text_1378_16079: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16080: {
    width: 6,
    minWidth: 6,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 460
  },
  View_1378_16081: {
    width: 376,
    minWidth: 376,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 824,
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  ImageBackground_1378_16082: {
    width: 6,
    minWidth: 6,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 824
  },
  View_1378_16083: {
    width: 376,
    minWidth: 376,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1012,
    backgroundColor: "rgba(234, 234, 234, 1)"
  },
  ImageBackground_1378_16084: {
    width: 6,
    minWidth: 6,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 1012
  },
  View_1378_16085: {
    width: 310.12103271484375,
    minWidth: 310.12103271484375,
    height: 265.2147216796875,
    minHeight: 265.2147216796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 525.0000610351562
  },
  View_1378_16086: {
    width: 111.9902572631836,
    minWidth: 111.9902572631836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 244.5048828125
  },
  Text_1378_16086: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16087: {
    width: 107.1211166381836,
    minWidth: 107.1211166381836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 84.86396789550781
  },
  Text_1378_16087: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16088: {
    width: 88.45606994628906,
    minWidth: 88.45606994628906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 42.619659423828125
  },
  Text_1378_16088: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16089: {
    width: 93.42491912841797,
    minWidth: 93.42491912841797,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.08935546875,
    top: 123.45841979980469
  },
  Text_1378_16089: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16090: {
    width: 30.02637481689453,
    minWidth: 30.02637481689453,
    height: 30.058452606201172,
    minHeight: 30.058452606201172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110.294677734375,
    top: 235.15626525878906,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_16091: {
    width: 16.87938690185547,
    height: 16.897441864013672,
    top: 6.58064079284668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.573486328125
  },
  ImageBackground_1378_16092: {
    width: 18.212045669555664,
    height: 19.458967208862305,
    top: 6.838396072387695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.74462890625
  },
  ImageBackground_1378_16099: {
    width: 21.207874298095703,
    height: 20.531002044677734,
    top: 6.580509185791016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.140380859375
  },
  ImageBackground_1378_16106: {
    width: 16.247817993164062,
    height: 23.27166748046875,
    top: 80.15576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176.304443359375
  },
  ImageBackground_1378_16107: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117
  },
  ImageBackground_1378_16108: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118
  },
  ImageBackground_1378_16109: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 39.820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176.304443359375
  },
  View_1378_16110: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 5.2495269775390625
  },
  Text_1378_16110: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16111: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 42.619659423828125
  },
  Text_1378_16111: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16112: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 85.67640686035156
  },
  Text_1378_16112: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16113: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 124.67095947265625
  },
  Text_1378_16113: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16114: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 163.66575622558594
  },
  Text_1378_16114: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16115: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 202.66053771972656
  },
  Text_1378_16115: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16116: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 244.90484619140625
  },
  Text_1378_16116: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16117: {
    width: 91.70216369628906,
    minWidth: 91.70216369628906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.229736328125,
    top: 162.4532928466797
  },
  Text_1378_16117: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16118: {
    width: 83.58692932128906,
    minWidth: 83.58692932128906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.453125,
    top: 5.24951171875
  },
  Text_1378_16118: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16119: {
    width: 98.1943588256836,
    minWidth: 98.1943588256836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 202.66053771972656
  },
  Text_1378_16119: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16120: {
    width: 17.853517532348633,
    minWidth: 17.853517532348633,
    height: 17.87259292602539,
    minHeight: 17.87259292602539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117.591552734375,
    top: 162.04110717773438,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16121: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0.55865478515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_16122: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16124: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 9.493671417236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16125: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16127: {
    width: 17.853517532348633,
    minWidth: 17.853517532348633,
    height: 17.87259292602539,
    minHeight: 17.87259292602539,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176.0185546875,
    top: 201.8480987548828,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_16128: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0.5587654113769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16129: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16131: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 9.494010925292969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16132: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16134: {
    width: 94,
    minWidth: 94,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 836
  },
  Text_1378_16134: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16135: {
    width: 94,
    minWidth: 94,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 1024
  },
  Text_1378_16135: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16136: {
    width: 35,
    minWidth: 35,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 836
  },
  Text_1378_16136: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16137: {
    width: 35,
    minWidth: 35,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 836
  },
  Text_1378_16137: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16138: {
    width: 125,
    minWidth: 125,
    minHeight: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 880
  },
  Text_1378_16138: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16139: {
    width: 7.927125453948975,
    minWidth: 7.927125453948975,
    minHeight: 101.61133575439453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 879
  },
  Text_1378_16139: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 9.971659660339355,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_16140: {
    width: 7.927125453948975,
    minWidth: 7.927125453948975,
    minHeight: 101.61133575439453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 879
  },
  Text_1378_16140: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 9.971659660339355,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_16141: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 168,
    top: 1055,
    resizeMode: "cover"
  },
  View_1378_16142: {
    width: 67,
    minWidth: 67,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 1068
  },
  Text_1378_16142: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16143: {
    width: 67,
    minWidth: 67,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 1382
  },
  Text_1378_16143: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16144: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 1067
  },
  Text_1378_16144: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16145: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 1382
  },
  Text_1378_16145: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16146: {
    width: 108,
    minWidth: 108,
    height: 234,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 1104
  },
  View_1378_16147: {
    width: 82,
    minWidth: 82,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 0
  },
  Text_1378_16147: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16148: {
    width: 14,
    minWidth: 14,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_16148: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16149: {
    width: 101,
    minWidth: 101,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 1105
  },
  Text_1378_16149: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16150: {
    width: 14,
    minWidth: 14,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 1105
  },
  Text_1378_16150: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16151: {
    width: 32,
    minWidth: 32,
    height: 34,
    minHeight: 34,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 171,
    top: 1371,
    resizeMode: "cover"
  },
  View_1378_16152: {
    width: 84,
    minWidth: 84,
    minHeight: 140,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 288
  },
  Text_1378_16152: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_16153: {
    width: 21,
    minWidth: 21,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 378,
    resizeMode: "cover"
  },
  ImageBackground_1378_16154: {
    width: 21,
    minWidth: 21,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 410,
    resizeMode: "cover"
  },
  ImageBackground_1378_16155: {
    width: 15,
    minWidth: 15,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 282,
    resizeMode: "cover"
  },
  ImageBackground_1378_16156: {
    width: 22,
    minWidth: 22,
    height: 21,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 316,
    resizeMode: "cover"
  },
  ImageBackground_1378_16157: {
    width: 22,
    minWidth: 22,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 34,
    top: 348,
    resizeMode: "cover"
  },
  View_1378_16158: {
    width: 6.111588954925537,
    minWidth: 6.111588954925537,
    minHeight: 165.01290893554688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 288
  },
  Text_1378_16158: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16159: {
    width: 13,
    minWidth: 13,
    minHeight: 146,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 215,
    top: 288
  },
  Text_1378_16159: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16160: {
    width: 12,
    minWidth: 12,
    minHeight: 147,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 288
  },
  Text_1378_16160: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16161: {
    width: 17,
    minWidth: 17,
    minHeight: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 340,
    top: 288
  },
  Text_1378_16161: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16162: {
    width: 10,
    minWidth: 10,
    minHeight: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 252
  },
  Text_1378_16162: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16163: {
    width: 14,
    minWidth: 14,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 251
  },
  Text_1378_16163: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16164: {
    width: 19,
    minWidth: 19,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 252
  },
  Text_1378_16164: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16165: {
    width: 109,
    minWidth: 109,
    minHeight: 278,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 1418
  },
  Text_1378_16165: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16166: {
    width: 17,
    minWidth: 17,
    minHeight: 278,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 1418
  },
  Text_1378_16166: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16167: {
    width: 89,
    minWidth: 89,
    minHeight: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 250,
    top: 1418
  },
  Text_1378_16167: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16168: {
    width: 14,
    minWidth: 14,
    minHeight: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 1418
  },
  Text_1378_16168: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16169: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1764,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_16169_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_16169_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_16169_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_16169_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_16169_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_16169_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16169_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_16169_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16169_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_16169_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_16169_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_16169_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_16169_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16169_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16169_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.8905029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_16169_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16169_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_16169_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.2183837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_16169_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_16169_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_16169_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_16169_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_16169_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_16169_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_16169_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.3997802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16169_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_16169_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_16169_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_16169_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_16169_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16169_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_16169_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_16169_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_16169_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_16169_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1258544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_16169_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_2: { height: 1815 }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
