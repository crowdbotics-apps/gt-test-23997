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
        style={styles.ImageBackground_1378_15926}
      />
      <View style={styles.View_1378_15927} />
      <View style={styles.View_1378_15928}>
        <View style={styles.View_1378_15929} />
        <View style={styles.View_1378_15930} />
        <View style={styles.View_1378_15931}>
          <Text style={styles.Text_1378_15931}>DRAW № 496</Text>
        </View>
      </View>
      <View style={styles.View_1378_15932}>
        <View style={styles.View_I1378_15932_200_649} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_I1378_15932_200_655}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/33fd/65ea/45cdc6e9be66a7f02bcafb88bff12b8f"
          }}
          style={styles.ImageBackground_I1378_15932_200_656}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_I1378_15932_282_5146}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_I1378_15932_282_5147}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_I1378_15932_282_5148}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_I1378_15932_616_1412}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/41d5/67a5/a84931d3103aef716d5bf8875c5038eb"
        }}
        style={styles.ImageBackground_1378_15933}
      />
      <View style={styles.View_1378_15934} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e130/d3a3/e897a3be81c877435d0ec69df3e50181"
        }}
        style={styles.ImageBackground_1378_15935}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c60a/83d8/e9a63d9d229c85b9a58ec5294a739470"
        }}
        style={styles.ImageBackground_1378_15936}
      />
      <View style={styles.View_1378_15937}>
        <Text style={styles.Text_1378_15937}>Manchester </Text>
      </View>
      <View style={styles.View_1378_15938}>
        <Text style={styles.Text_1378_15938}>Liverpool</Text>
      </View>
      <View style={styles.View_1378_15939}>
        <Text style={styles.Text_1378_15939}>1 : 0</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/60e1/133a/dcc8bc05cd97084a92d643819f3469eb"
        }}
        style={styles.ImageBackground_1378_15940}
      />
      <View style={styles.View_1378_15941}>
        <Text style={styles.Text_1378_15941}>Liverpool</Text>
      </View>
      <View style={styles.View_1378_15942}>
        <Text style={styles.Text_1378_15942}>Matches</Text>
      </View>
      <View style={styles.View_1378_15943}>
        <Text style={styles.Text_1378_15943}>Table</Text>
      </View>
      <View style={styles.View_1378_15944}>
        <Text style={styles.Text_1378_15944}>Table</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/71d0/e18f/d42b28f0a7fd2acab3cc0fc4d248cb80"
        }}
        style={styles.ImageBackground_1378_15945}
      />
      <View style={styles.View_1378_15946}>
        <Text style={styles.Text_1378_15946}>12 WINS</Text>
      </View>
      <View style={styles.View_1378_15947}>
        <Text style={styles.Text_1378_15947}>3 draws</Text>
      </View>
      <View style={styles.View_1378_15948}>
        <Text style={styles.Text_1378_15948}>6 wins</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8ca1/6023/0f2bb76425948e669d25dd93cda66b9e"
        }}
        style={styles.ImageBackground_1378_15949}
      />
      <View style={styles.View_1378_15950}>
        <View style={styles.View_1378_15951}>
          <Text style={styles.Text_1378_15951}>mon, 22 Jul</Text>
        </View>
        <View style={styles.View_1378_15952}>
          <Text style={styles.Text_1378_15952}>Manchester </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a162/9b1a/cd48eda41efd53bf98ed3a2144f3617b"
          }}
          style={styles.ImageBackground_1378_15953}
        />
        <View style={styles.View_1378_15954}>
          <Text style={styles.Text_1378_15954}>14 : 00</Text>
        </View>
        <View style={styles.View_1378_15955}>
          <Text style={styles.Text_1378_15955}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ba/eed0/d8f7c3bbc74bc82ccfa0f9159aa17092"
          }}
          style={styles.ImageBackground_1378_15956}
        />
      </View>
      <View style={styles.View_1378_15957}>
        <View style={styles.View_1378_15958}>
          <Text style={styles.Text_1378_15958}>Yesterday</Text>
        </View>
        <View style={styles.View_1378_15959}>
          <Text style={styles.Text_1378_15959}>Manchester </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a162/9b1a/cd48eda41efd53bf98ed3a2144f3617b"
          }}
          style={styles.ImageBackground_1378_15960}
        />
        <View style={styles.View_1378_15961}>
          <Text style={styles.Text_1378_15961}>1 - 3</Text>
        </View>
        <View style={styles.View_1378_15962}>
          <Text style={styles.Text_1378_15962}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ba/eed0/d8f7c3bbc74bc82ccfa0f9159aa17092"
          }}
          style={styles.ImageBackground_1378_15963}
        />
      </View>
      <View style={styles.View_1378_15964}>
        <View style={styles.View_1378_15965}>
          <Text style={styles.Text_1378_15965}>15 Jul, 2018</Text>
        </View>
        <View style={styles.View_1378_15966}>
          <Text style={styles.Text_1378_15966}>5 Nov, 2017</Text>
        </View>
        <View style={styles.View_1378_15967}>
          <Text style={styles.Text_1378_15967}>Manchester </Text>
        </View>
        <View style={styles.View_1378_15968}>
          <Text style={styles.Text_1378_15968}>Manchester </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a162/9b1a/cd48eda41efd53bf98ed3a2144f3617b"
          }}
          style={styles.ImageBackground_1378_15969}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a162/9b1a/cd48eda41efd53bf98ed3a2144f3617b"
          }}
          style={styles.ImageBackground_1378_15970}
        />
        <View style={styles.View_1378_15971}>
          <Text style={styles.Text_1378_15971}>2 - 0</Text>
        </View>
        <View style={styles.View_1378_15972}>
          <Text style={styles.Text_1378_15972}>1 - 0</Text>
        </View>
        <View style={styles.View_1378_15973}>
          <Text style={styles.Text_1378_15973}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ba/eed0/d8f7c3bbc74bc82ccfa0f9159aa17092"
          }}
          style={styles.ImageBackground_1378_15974}
        />
        <View style={styles.View_1378_15975}>
          <Text style={styles.Text_1378_15975}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3ba/eed0/d8f7c3bbc74bc82ccfa0f9159aa17092"
          }}
          style={styles.ImageBackground_1378_15976}
        />
      </View>
      <View style={styles.View_1378_15977} />
      <View style={styles.View_1378_15978}>
        <Text style={styles.Text_1378_15978}>Match Facts</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_15979}
      />
      <View style={styles.View_1378_15980} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_15981}
      />
      <View style={styles.View_1378_15982} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df94/2c22/1b1e37f3615baf97c95077ff13071d4a"
        }}
        style={styles.ImageBackground_1378_15983}
      />
      <View style={styles.View_1378_15984}>
        <View style={styles.View_1378_15985}>
          <Text style={styles.Text_1378_15985}>John Achterberg</Text>
        </View>
        <View style={styles.View_1378_15986}>
          <Text style={styles.Text_1378_15986}>Andrew Massey</Text>
        </View>
        <View style={styles.View_1378_15987}>
          <Text style={styles.Text_1378_15987}>Lee Radcliffe</Text>
        </View>
        <View style={styles.View_1378_15988}>
          <Text style={styles.Text_1378_15988}>Phil Jones</Text>
        </View>
        <View style={styles.View_1378_15989}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f76c/96b4/4d9ac2c4888686b78a3fcebec981038a"
            }}
            style={styles.ImageBackground_1378_15990}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b1e/4bb5/37efe7a739a966ea6743bc1b6f0de6ed"
            }}
            style={styles.ImageBackground_1378_15991}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0392/6240/1afe8edf913d79bfde6ba89838288a81"
            }}
            style={styles.ImageBackground_1378_15998}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fb/f601/3aaeed4a82eb81533cf55fcc9ff7d276"
          }}
          style={styles.ImageBackground_1378_16005}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fb/f601/3aaeed4a82eb81533cf55fcc9ff7d276"
          }}
          style={styles.ImageBackground_1378_16006}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a800/a657/9d6b2b672de569ca9f387d6bdadac69a"
          }}
          style={styles.ImageBackground_1378_16007}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a800/a657/9d6b2b672de569ca9f387d6bdadac69a"
          }}
          style={styles.ImageBackground_1378_16008}
        />
        <View style={styles.View_1378_16009}>
          <Text style={styles.Text_1378_16009}>16’</Text>
        </View>
        <View style={styles.View_1378_16010}>
          <Text style={styles.Text_1378_16010}>21’</Text>
        </View>
        <View style={styles.View_1378_16011}>
          <Text style={styles.Text_1378_16011}>34’</Text>
        </View>
        <View style={styles.View_1378_16012}>
          <Text style={styles.Text_1378_16012}>37’</Text>
        </View>
        <View style={styles.View_1378_16013}>
          <Text style={styles.Text_1378_16013}>42’</Text>
        </View>
        <View style={styles.View_1378_16014}>
          <Text style={styles.Text_1378_16014}>51’</Text>
        </View>
        <View style={styles.View_1378_16015}>
          <Text style={styles.Text_1378_16015}>61’</Text>
        </View>
        <View style={styles.View_1378_16016}>
          <Text style={styles.Text_1378_16016}> Ashley Young</Text>
        </View>
        <View style={styles.View_1378_16017}>
          <Text style={styles.Text_1378_16017}> Diogo Dalot</Text>
        </View>
        <View style={styles.View_1378_16018}>
          <Text style={styles.Text_1378_16018}>Scott McAuley</Text>
        </View>
        <View style={styles.View_1378_16019}>
          <View style={styles.View_1378_16020}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/a5d5/92d058afdd79b3ce6bbcb8232ac24917"
              }}
              style={styles.ImageBackground_1378_16021}
            />
          </View>
          <View style={styles.View_1378_16023}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8b/dd12/a2428f05e3f3a2f07939884229b6a8d3"
              }}
              style={styles.ImageBackground_1378_16024}
            />
          </View>
        </View>
        <View style={styles.View_1378_16026}>
          <View style={styles.View_1378_16027}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20be/a5d5/92d058afdd79b3ce6bbcb8232ac24917"
              }}
              style={styles.ImageBackground_1378_16028}
            />
          </View>
          <View style={styles.View_1378_16030}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8b/dd12/a2428f05e3f3a2f07939884229b6a8d3"
              }}
              style={styles.ImageBackground_1378_16031}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_16033}>
        <Text style={styles.Text_1378_16033}>Match details</Text>
      </View>
      <View style={styles.View_1378_16034}>
        <Text style={styles.Text_1378_16034}>Line Up</Text>
      </View>
      <View style={styles.View_1378_16035}>
        <Text style={styles.Text_1378_16035}>52%</Text>
      </View>
      <View style={styles.View_1378_16036}>
        <Text style={styles.Text_1378_16036}>48%</Text>
      </View>
      <View style={styles.View_1378_16037}>
        <Text style={styles.Text_1378_16037}>
          Shots on goal Clearance Missed Shots Goalkeeper saves Number of
          offside
        </Text>
      </View>
      <View style={styles.View_1378_16038}>
        <Text style={styles.Text_1378_16038}>2 4 2 3 3</Text>
      </View>
      <View style={styles.View_1378_16039}>
        <Text style={styles.Text_1378_16039}>1 3 1 2 3</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/45a0/74b9/99e7ae079434d49ac66054bd1d8c593e"
        }}
        style={styles.ImageBackground_1378_16040}
      />
      <View style={styles.View_1378_16041}>
        <Text style={styles.Text_1378_16041}>Main team</Text>
      </View>
      <View style={styles.View_1378_16042}>
        <Text style={styles.Text_1378_16042}>Main team</Text>
      </View>
      <View style={styles.View_1378_16043}>
        <Text style={styles.Text_1378_16043}>Reserve</Text>
      </View>
      <View style={styles.View_1378_16044}>
        <Text style={styles.Text_1378_16044}>Reserve</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c4f/60bc/fa467ed863694c741a50bd6c555df5a4"
        }}
        style={styles.ImageBackground_1378_16045}
      />
      <View style={styles.View_1378_16046}>
        <Text style={styles.Text_1378_16046}>
          Jürgen Klopp Peter Krawietz Pepijn Lijnders John Achterberg Jack
          Robinson Andreas Kornmayer Andrew Massey Philipp Jacobsen Conall
          Murtagh Paul Small Lee Radcliffe
        </Text>
      </View>
      <View style={styles.View_1378_16047}>
        <Text style={styles.Text_1378_16047}>2 7 1 6 10 3 4 11 14 5 8</Text>
      </View>
      <View style={styles.View_1378_16048}>
        <Text style={styles.Text_1378_16048}>
          Mona Nemmer Mark Leyland Greg Mathieson James French Scott McAuley
        </Text>
      </View>
      <View style={styles.View_1378_16049}>
        <Text style={styles.Text_1378_16049}>18 15 21 28 17</Text>
      </View>
      <View style={styles.View_1378_16050}>
        <Text style={styles.Text_1378_16050}>
          David De Gea Marcos Rojo Victor Lindelöf Eric Bailly Phil Jones Marcos
          Rojo Chris Smalling Ashley Young Diogo Dalot Luke Shaw Juan Mata
        </Text>
      </View>
      <View style={styles.View_1378_16051}>
        <Text style={styles.Text_1378_16051}>1 9 6 13 5 8 4 2 15 11 3 </Text>
      </View>
      <View style={styles.View_1378_16052}>
        <Text style={styles.Text_1378_16052}>
          Alexis Sánchez Romelu Lukaku Anthony Martial Marcus Rashford Mason
          Greenwood
        </Text>
      </View>
      <View style={styles.View_1378_16053}>
        <Text style={styles.Text_1378_16053}>22 26 19 14 18</Text>
      </View>
      <View style={styles.View_1378_16054}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_16054_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_16054_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_16054_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_16054_988_6521}
        />
        <View style={styles.View_I1378_16054_988_6522}>
          <Text style={styles.Text_I1378_16054_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_16054_1364_3889}>
          <Text style={styles.Text_I1378_16054_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_16054_988_6523}>
          <Text style={styles.Text_I1378_16054_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_16054_988_6524}
        />
        <View style={styles.View_I1378_16054_1364_676}>
          <View style={styles.View_I1378_16054_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_16054_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_16054_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_16054_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_16054_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_16054_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_16054_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16054_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16054_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_16054_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16054_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_16054_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_16054_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_16054_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16054_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_16054_1364_708}
            />
          </View>
          <View style={styles.View_I1378_16054_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_16054_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_16054_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_16054_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_16054_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_16054_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_16054_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_16054_1364_723}
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
  ImageBackground_1378_15926: {
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
  View_1378_15927: {
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
  View_1378_15928: {
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
  View_1378_15929: {
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
  View_1378_15930: {
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
  View_1378_15931: {
    width: 73,
    minWidth: 73,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 12
  },
  Text_1378_15931: {
    color: "rgba(54, 54, 54, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15932: {
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
  View_I1378_15932_200_649: {
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
  ImageBackground_I1378_15932_200_655: {
    flexGrow: 1,
    width: 68.78099822998047,
    height: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270,
    top: 10
  },
  ImageBackground_I1378_15932_200_656: {
    flexGrow: 1,
    width: 10,
    height: 6.110935688018799,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 344,
    top: 14
  },
  ImageBackground_I1378_15932_282_5146: {
    flexGrow: 1,
    width: 33,
    height: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 232,
    top: 6
  },
  ImageBackground_I1378_15932_282_5147: {
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
  ImageBackground_I1378_15932_282_5148: {
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
  ImageBackground_I1378_15932_616_1412: {
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
  ImageBackground_1378_15933: {
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
  View_1378_15934: {
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
  ImageBackground_1378_15935: {
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
  ImageBackground_1378_15936: {
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
  View_1378_15937: {
    width: 97,
    minWidth: 97,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 57,
    top: 134
  },
  Text_1378_15937: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15938: {
    width: 84,
    minWidth: 84,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 621,
    top: 137
  },
  Text_1378_15938: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15939: {
    width: 35,
    minWidth: 35,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 170,
    top: 135
  },
  Text_1378_15939: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15940: {
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
  View_1378_15941: {
    width: 76,
    minWidth: 76,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 276,
    top: 134
  },
  Text_1378_15941: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15942: {
    width: 55,
    minWidth: 55,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 202
  },
  Text_1378_15942: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15943: {
    width: 34,
    minWidth: 34,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 202
  },
  Text_1378_15943: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15944: {
    width: 44,
    minWidth: 44,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 555,
    top: 213
  },
  Text_1378_15944: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15945: {
    width: 176,
    minWidth: 176,
    height: 3,
    minHeight: 3,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 224
  },
  View_1378_15946: {
    width: 42,
    minWidth: 42,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 251
  },
  Text_1378_15946: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15947: {
    width: 43,
    minWidth: 43,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166,
    top: 251
  },
  Text_1378_15947: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15948: {
    width: 35,
    minWidth: 35,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293,
    top: 251
  },
  Text_1378_15948: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_15949: {
    width: 376,
    minWidth: 376,
    height: 0.000032870964787434787,
    minHeight: 0.000032870964787434787,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -1,
    top: 274
  },
  View_1378_15950: {
    width: 337,
    minWidth: 337,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 294
  },
  View_1378_15951: {
    width: 57,
    minWidth: 57,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 10
  },
  Text_1378_15951: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_15952: {
    width: 69,
    minWidth: 69,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 8
  },
  Text_1378_15952: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15953: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 5,
    resizeMode: "cover"
  },
  View_1378_15954: {
    width: 39,
    minWidth: 39,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 202,
    top: 9
  },
  Text_1378_15954: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15955: {
    width: 53,
    minWidth: 53,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 8
  },
  Text_1378_15955: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15956: {
    width: 18,
    minWidth: 18,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15957: {
    width: 337,
    minWidth: 337,
    height: 27,
    minHeight: 27,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 330
  },
  View_1378_15958: {
    width: 49,
    minWidth: 49,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 11
  },
  Text_1378_15958: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15959: {
    width: 69,
    minWidth: 69,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 115,
    top: 9
  },
  Text_1378_15959: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15960: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 5,
    resizeMode: "cover"
  },
  View_1378_15961: {
    width: 26,
    minWidth: 26,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208,
    top: 9
  },
  Text_1378_15961: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15962: {
    width: 53,
    minWidth: 53,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 9
  },
  Text_1378_15962: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15963: {
    width: 18,
    minWidth: 18,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15964: {
    width: 337,
    minWidth: 337,
    height: 65,
    minHeight: 65,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19,
    top: 368
  },
  View_1378_15965: {
    width: 60,
    minWidth: 60,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 11
  },
  Text_1378_15965: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15966: {
    width: 58,
    minWidth: 58,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 48
  },
  Text_1378_15966: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15967: {
    width: 69,
    minWidth: 69,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116,
    top: 46
  },
  Text_1378_15967: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15968: {
    width: 69,
    minWidth: 69,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 116,
    top: 9
  },
  Text_1378_15968: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15969: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 5,
    resizeMode: "cover"
  },
  ImageBackground_1378_15970: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 87,
    top: 43,
    resizeMode: "cover"
  },
  View_1378_15971: {
    width: 30,
    minWidth: 30,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208,
    top: 46
  },
  Text_1378_15971: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15972: {
    width: 26,
    minWidth: 26,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 208,
    top: 10
  },
  Text_1378_15972: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15973: {
    width: 53,
    minWidth: 53,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 9
  },
  Text_1378_15973: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15974: {
    width: 18,
    minWidth: 18,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 0,
    resizeMode: "cover"
  },
  View_1378_15975: {
    width: 53,
    minWidth: 53,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 284,
    top: 46
  },
  Text_1378_15975: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15976: {
    width: 18,
    minWidth: 18,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 37,
    resizeMode: "cover"
  },
  View_1378_15977: {
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
  View_1378_15978: {
    width: 78,
    minWidth: 78,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 147,
    top: 472
  },
  Text_1378_15978: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_15979: {
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
  View_1378_15980: {
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
  ImageBackground_1378_15981: {
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
  View_1378_15982: {
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
  ImageBackground_1378_15983: {
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
  View_1378_15984: {
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
  View_1378_15985: {
    width: 111.9902572631836,
    minWidth: 111.9902572631836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 244.5048828125
  },
  Text_1378_15985: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15986: {
    width: 107.1211166381836,
    minWidth: 107.1211166381836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 84.86396789550781
  },
  Text_1378_15986: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15987: {
    width: 88.45606994628906,
    minWidth: 88.45606994628906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 42.619659423828125
  },
  Text_1378_15987: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15988: {
    width: 93.42491912841797,
    minWidth: 93.42491912841797,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38.08935546875,
    top: 123.45841979980469
  },
  Text_1378_15988: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_15989: {
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
  ImageBackground_1378_15990: {
    width: 16.87938690185547,
    height: 16.897441864013672,
    top: 6.58064079284668,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.573486328125
  },
  ImageBackground_1378_15991: {
    width: 18.212045669555664,
    height: 19.458967208862305,
    top: 6.838396072387695,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.74462890625
  },
  ImageBackground_1378_15998: {
    width: 21.207874298095703,
    height: 20.531002044677734,
    top: 6.580509185791016,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.140380859375
  },
  ImageBackground_1378_16005: {
    width: 16.247817993164062,
    height: 23.27166748046875,
    top: 80.15576171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176.304443359375
  },
  ImageBackground_1378_16006: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117
  },
  ImageBackground_1378_16007: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 121,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 118
  },
  ImageBackground_1378_16008: {
    width: 16.247817993164062,
    height: 23.2716064453125,
    top: 39.820068359375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 176.304443359375
  },
  View_1378_16009: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 5.2495269775390625
  },
  Text_1378_16009: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16010: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 42.619659423828125
  },
  Text_1378_16010: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16011: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 85.67640686035156
  },
  Text_1378_16011: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16012: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 124.67095947265625
  },
  Text_1378_16012: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16013: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 163.66575622558594
  },
  Text_1378_16013: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16014: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 202.66053771972656
  },
  Text_1378_16014: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16015: {
    width: 20.2880916595459,
    minWidth: 20.2880916595459,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 146,
    top: 244.90484619140625
  },
  Text_1378_16015: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16016: {
    width: 91.70216369628906,
    minWidth: 91.70216369628906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.229736328125,
    top: 162.4532928466797
  },
  Text_1378_16016: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16017: {
    width: 83.58692932128906,
    minWidth: 83.58692932128906,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26.453125,
    top: 5.24951171875
  },
  Text_1378_16017: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16018: {
    width: 98.1943588256836,
    minWidth: 98.1943588256836,
    minHeight: 17.06020164489746,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 203,
    top: 202.66053771972656
  },
  Text_1378_16018: {
    color: "rgba(17, 16, 16, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16019: {
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
  View_1378_16020: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0.55865478515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_16021: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16023: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 9.493671417236328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16024: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16026: {
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
  View_1378_16027: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0.5587654113769531,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16028: {
    width: 17.853239059448242,
    height: 7.818485260009766,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16030: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 9.494010925292969,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.000244140625
  },
  ImageBackground_1378_16031: {
    width: 17.853239059448242,
    height: 7.82000207901001,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_16033: {
    width: 94,
    minWidth: 94,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 836
  },
  Text_1378_16033: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16034: {
    width: 94,
    minWidth: 94,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 140,
    top: 1024
  },
  Text_1378_16034: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16035: {
    width: 35,
    minWidth: 35,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 836
  },
  Text_1378_16035: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16036: {
    width: 35,
    minWidth: 35,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 306,
    top: 836
  },
  Text_1378_16036: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16037: {
    width: 125,
    minWidth: 125,
    minHeight: 101,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 125,
    top: 880
  },
  Text_1378_16037: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16038: {
    width: 7.927125453948975,
    minWidth: 7.927125453948975,
    minHeight: 101.61133575439453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 316,
    top: 879
  },
  Text_1378_16038: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 9.971659660339355,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_16039: {
    width: 7.927125453948975,
    minWidth: 7.927125453948975,
    minHeight: 101.61133575439453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 879
  },
  Text_1378_16039: {
    color: "rgba(78, 78, 78, 1)",
    fontSize: 9.971659660339355,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  ImageBackground_1378_16040: {
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
  View_1378_16041: {
    width: 67,
    minWidth: 67,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 1068
  },
  Text_1378_16041: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16042: {
    width: 67,
    minWidth: 67,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 51,
    top: 1382
  },
  Text_1378_16042: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16043: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 256,
    top: 1067
  },
  Text_1378_16043: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_16044: {
    width: 51,
    minWidth: 51,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 257,
    top: 1382
  },
  Text_1378_16044: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_16045: {
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
  View_1378_16046: {
    width: 109,
    minWidth: 109,
    minHeight: 278,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 1418
  },
  Text_1378_16046: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16047: {
    width: 17,
    minWidth: 17,
    minHeight: 278,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 1418
  },
  Text_1378_16047: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16048: {
    width: 89,
    minWidth: 89,
    minHeight: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 250,
    top: 1418
  },
  Text_1378_16048: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16049: {
    width: 14,
    minWidth: 14,
    minHeight: 124,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 1418
  },
  Text_1378_16049: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16050: {
    width: 82,
    minWidth: 82,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 62,
    top: 1103
  },
  Text_1378_16050: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16051: {
    width: 14,
    minWidth: 14,
    minHeight: 234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 1103
  },
  Text_1378_16051: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16052: {
    width: 101,
    minWidth: 101,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 250,
    top: 1103
  },
  Text_1378_16052: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16053: {
    width: 14,
    minWidth: 14,
    minHeight: 102,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 228,
    top: 1103
  },
  Text_1378_16053: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_16054: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1763,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_16054_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_16054_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_16054_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_16054_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_16054_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_16054_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16054_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_16054_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_16054_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_16054_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_16054_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_16054_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_16054_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16054_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16054_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.8905029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_16054_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16054_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_16054_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.2183837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_16054_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_16054_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_16054_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_16054_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_16054_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_16054_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_16054_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.3997802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_16054_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_16054_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_16054_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_16054_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_16054_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_16054_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_16054_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_16054_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_16054_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_16054_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1258544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_16054_1364_723: {
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
