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
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a4bd/405d/7617f4fb137ece198c88ba5c58c5923f"
        }}
        style={styles.ImageBackground_1378_14249}
      />
      <View style={styles.View_1378_14250} />
      <View style={styles.View_1378_14251}>
        <View style={styles.View_1378_14252} />
        <View style={styles.View_1378_14253} />
      </View>
      <View style={styles.View_1378_14254}>
        <View style={styles.View_1378_14255}>
          <Text style={styles.Text_1378_14255}>1</Text>
        </View>
        <View style={styles.View_1378_14256}>
          <Text style={styles.Text_1378_14256}>Time</Text>
        </View>
        <View style={styles.View_1378_14257}>
          <Text style={styles.Text_1378_14257}>X</Text>
        </View>
        <View style={styles.View_1378_14258}>
          <Text style={styles.Text_1378_14258}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_14259}>
        <View style={styles.View_1378_14260}>
          <Text style={styles.Text_1378_14260}>1</Text>
        </View>
        <View style={styles.View_1378_14261}>
          <Text style={styles.Text_1378_14261}>Time</Text>
        </View>
        <View style={styles.View_1378_14262}>
          <Text style={styles.Text_1378_14262}>X</Text>
        </View>
        <View style={styles.View_1378_14263}>
          <Text style={styles.Text_1378_14263}>2</Text>
        </View>
      </View>
      <View style={styles.View_1378_14264}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_14265}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_14266}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_14273}
        />
      </View>
      <View style={styles.View_1378_14280}>
        <Text style={styles.Text_1378_14280}>4’</Text>
      </View>
      <View style={styles.View_1378_14281}>
        <View style={styles.View_1378_14282} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f832/d629/bd48902a0a9e223e3b2b1dc60744639d"
          }}
          style={styles.ImageBackground_1378_14283}
        />
      </View>
      <View style={styles.View_1378_14284} />
      <View style={styles.View_1378_14285}>
        <View style={styles.View_1378_14286}>
          <View style={styles.View_1378_14287}>
            <View style={styles.View_1378_14288}>
              <Text style={styles.Text_1378_14288}>Manchester</Text>
            </View>
            <View style={styles.View_1378_14289}>
              <Text style={styles.Text_1378_14289}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_14290}>
              <Text style={styles.Text_1378_14290}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_14291}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_14292}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_14293}>
        <View style={styles.View_1378_14294}>
          <View style={styles.View_1378_14295}>
            <View style={styles.View_1378_14296}>
              <Text style={styles.Text_1378_14296}>Manchester</Text>
            </View>
            <View style={styles.View_1378_14297}>
              <Text style={styles.Text_1378_14297}>Liverpool</Text>
            </View>
            <View style={styles.View_1378_14298}>
              <Text style={styles.Text_1378_14298}>1 - 0</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
              }}
              style={styles.ImageBackground_1378_14299}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
              }}
              style={styles.ImageBackground_1378_14300}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_1378_14301}>
        <View style={styles.View_1378_14302}>
          <Text style={styles.Text_1378_14302}>12% </Text>
        </View>
        <View style={styles.View_1378_14303}>
          <Text style={styles.Text_1378_14303}>68%</Text>
        </View>
        <View style={styles.View_1378_14304}>
          <Text style={styles.Text_1378_14304}>20%</Text>
        </View>
        <View style={styles.View_1378_14305}>
          <Text style={styles.Text_1378_14305}>2,44</Text>
        </View>
        <View style={styles.View_1378_14306}>
          <Text style={styles.Text_1378_14306}>1,32</Text>
        </View>
        <View style={styles.View_1378_14307}>
          <Text style={styles.Text_1378_14307}>3,55</Text>
        </View>
        <View style={styles.View_1378_14308} />
        <View style={styles.View_1378_14309} />
        <View style={styles.View_1378_14310} />
      </View>
      <View style={styles.View_1378_14311}>
        <Text style={styles.Text_1378_14311}>12’</Text>
      </View>
      <View style={styles.View_1378_14312}>
        <View style={styles.View_1378_14313} />
        <View style={styles.View_1378_14314}>
          <Text style={styles.Text_1378_14314}>12% </Text>
        </View>
        <View style={styles.View_1378_14315}>
          <Text style={styles.Text_1378_14315}>68%</Text>
        </View>
        <View style={styles.View_1378_14316}>
          <Text style={styles.Text_1378_14316}>20%</Text>
        </View>
        <View style={styles.View_1378_14317}>
          <Text style={styles.Text_1378_14317}>2,44</Text>
        </View>
        <View style={styles.View_1378_14318}>
          <Text style={styles.Text_1378_14318}>1,32</Text>
        </View>
        <View style={styles.View_1378_14319}>
          <Text style={styles.Text_1378_14319}>3,55</Text>
        </View>
        <View style={styles.View_1378_14320} />
        <View style={styles.View_1378_14321} />
      </View>
      <View style={styles.View_1378_14322}>
        <Text style={styles.Text_1378_14322}>view details</Text>
      </View>
      <View style={styles.View_1378_14323} />
      <View style={styles.View_1378_14324}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_14325}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_14326}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_14333}
        />
      </View>
      <View style={styles.View_1378_14340} />
      <View style={styles.View_1378_14341}>
        <Text style={styles.Text_1378_14341}>view details</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
        }}
        style={styles.ImageBackground_1378_14342}
      />
      <View style={styles.View_1378_14343}>
        <View style={styles.View_1378_14344}>
          <Text style={styles.Text_1378_14344}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14345}>
          <Text style={styles.Text_1378_14345}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_14346}>
          <Text style={styles.Text_1378_14346}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14347}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14348}
        />
        <View style={styles.View_1378_14349}>
          <Text style={styles.Text_1378_14349}>1</Text>
        </View>
        <View style={styles.View_1378_14350}>
          <Text style={styles.Text_1378_14350}>Time</Text>
        </View>
        <View style={styles.View_1378_14351}>
          <Text style={styles.Text_1378_14351}>X</Text>
        </View>
        <View style={styles.View_1378_14352}>
          <Text style={styles.Text_1378_14352}>2</Text>
        </View>
        <View style={styles.View_1378_14353}>
          <Text style={styles.Text_1378_14353}>17’</Text>
        </View>
        <View style={styles.View_1378_14354}>
          <Text style={styles.Text_1378_14354}>12% </Text>
        </View>
        <View style={styles.View_1378_14355}>
          <Text style={styles.Text_1378_14355}>68%</Text>
        </View>
        <View style={styles.View_1378_14356}>
          <Text style={styles.Text_1378_14356}>20%</Text>
        </View>
        <View style={styles.View_1378_14357}>
          <Text style={styles.Text_1378_14357}>2,44</Text>
        </View>
        <View style={styles.View_1378_14358}>
          <Text style={styles.Text_1378_14358}>1,32</Text>
        </View>
        <View style={styles.View_1378_14359}>
          <Text style={styles.Text_1378_14359}>3,55</Text>
        </View>
        <View style={styles.View_1378_14360} />
        <View style={styles.View_1378_14361} />
        <View style={styles.View_1378_14362} />
        <View style={styles.View_1378_14363} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
          }}
          style={styles.ImageBackground_1378_14364}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
          }}
          style={styles.ImageBackground_1378_14365}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
          }}
          style={styles.ImageBackground_1378_14372}
        />
        <View style={styles.View_1378_14379}>
          <Text style={styles.Text_1378_14379}>view details</Text>
        </View>
        <View style={styles.View_1378_14380} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14381}
        />
      </View>
      <View style={styles.View_1378_14382}>
        <View style={styles.View_1378_14383}>
          <Text style={styles.Text_1378_14383}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14384}>
          <Text style={styles.Text_1378_14384}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_14385}>
          <Text style={styles.Text_1378_14385}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14386}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14387}
        />
        <View style={styles.View_1378_14388}>
          <Text style={styles.Text_1378_14388}>1</Text>
        </View>
        <View style={styles.View_1378_14389}>
          <Text style={styles.Text_1378_14389}>Time</Text>
        </View>
        <View style={styles.View_1378_14390}>
          <Text style={styles.Text_1378_14390}>X</Text>
        </View>
        <View style={styles.View_1378_14391}>
          <Text style={styles.Text_1378_14391}>2</Text>
        </View>
        <View style={styles.View_1378_14392}>
          <Text style={styles.Text_1378_14392}>37’</Text>
        </View>
        <View style={styles.View_1378_14393}>
          <Text style={styles.Text_1378_14393}>12% </Text>
        </View>
        <View style={styles.View_1378_14394}>
          <Text style={styles.Text_1378_14394}>68%</Text>
        </View>
        <View style={styles.View_1378_14395}>
          <Text style={styles.Text_1378_14395}>20%</Text>
        </View>
        <View style={styles.View_1378_14396}>
          <Text style={styles.Text_1378_14396}>2,44</Text>
        </View>
        <View style={styles.View_1378_14397}>
          <Text style={styles.Text_1378_14397}>1,32</Text>
        </View>
        <View style={styles.View_1378_14398}>
          <Text style={styles.Text_1378_14398}>3,55</Text>
        </View>
        <View style={styles.View_1378_14399} />
        <View style={styles.View_1378_14400} />
        <View style={styles.View_1378_14401} />
        <View style={styles.View_1378_14402}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_14403}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_14404}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_14411}
          />
        </View>
        <View style={styles.View_1378_14418}>
          <Text style={styles.Text_1378_14418}>view details</Text>
        </View>
        <View style={styles.View_1378_14419} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14420}
        />
      </View>
      <View style={styles.View_1378_14421}>
        <View style={styles.View_1378_14422}>
          <Text style={styles.Text_1378_14422}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14423}>
          <Text style={styles.Text_1378_14423}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_14424}>
          <Text style={styles.Text_1378_14424}>1 - 0</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14425}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14426}
        />
        <View style={styles.View_1378_14427}>
          <Text style={styles.Text_1378_14427}>1</Text>
        </View>
        <View style={styles.View_1378_14428}>
          <Text style={styles.Text_1378_14428}>Time</Text>
        </View>
        <View style={styles.View_1378_14429}>
          <Text style={styles.Text_1378_14429}>X</Text>
        </View>
        <View style={styles.View_1378_14430}>
          <Text style={styles.Text_1378_14430}>2</Text>
        </View>
        <View style={styles.View_1378_14431}>
          <Text style={styles.Text_1378_14431}>soon</Text>
        </View>
        <View style={styles.View_1378_14432}>
          <Text style={styles.Text_1378_14432}>soon</Text>
        </View>
        <View style={styles.View_1378_14433}>
          <Text style={styles.Text_1378_14433}>soon</Text>
        </View>
        <View style={styles.View_1378_14434}>
          <Text style={styles.Text_1378_14434}>soon</Text>
        </View>
        <View style={styles.View_1378_14435}>
          <Text style={styles.Text_1378_14435}>12% </Text>
        </View>
        <View style={styles.View_1378_14436}>
          <Text style={styles.Text_1378_14436}>68%</Text>
        </View>
        <View style={styles.View_1378_14437}>
          <Text style={styles.Text_1378_14437}>20%</Text>
        </View>
        <View style={styles.View_1378_14438}>
          <Text style={styles.Text_1378_14438}>2,44</Text>
        </View>
        <View style={styles.View_1378_14439}>
          <Text style={styles.Text_1378_14439}>1,32</Text>
        </View>
        <View style={styles.View_1378_14440}>
          <Text style={styles.Text_1378_14440}>3,55</Text>
        </View>
        <View style={styles.View_1378_14441} />
        <View style={styles.View_1378_14442} />
        <View style={styles.View_1378_14443} />
        <View style={styles.View_1378_14444}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_14445}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_14446}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_14453}
          />
        </View>
        <View style={styles.View_1378_14460}>
          <Text style={styles.Text_1378_14460}>view details</Text>
        </View>
        <View style={styles.View_1378_14461} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14462}
        />
      </View>
      <View style={styles.View_1378_14463}>
        <View style={styles.View_1378_14464}>
          <Text style={styles.Text_1378_14464}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14465}>
          <Text style={styles.Text_1378_14465}>Liverpool</Text>
        </View>
        <View style={styles.View_1378_14466}>
          <Text style={styles.Text_1378_14466}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_14467}>
          <Text style={styles.Text_1378_14467}>25 Apr</Text>
        </View>
        <View style={styles.View_1378_14468}>
          <Text style={styles.Text_1378_14468}>25 Apr</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14469}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14470}
        />
        <View style={styles.View_1378_14471}>
          <Text style={styles.Text_1378_14471}>1</Text>
        </View>
        <View style={styles.View_1378_14472}>
          <Text style={styles.Text_1378_14472}>Time</Text>
        </View>
        <View style={styles.View_1378_14473}>
          <Text style={styles.Text_1378_14473}>X</Text>
        </View>
        <View style={styles.View_1378_14474}>
          <Text style={styles.Text_1378_14474}>2</Text>
        </View>
        <View style={styles.View_1378_14475}>
          <Text style={styles.Text_1378_14475}>12% </Text>
        </View>
        <View style={styles.View_1378_14476}>
          <Text style={styles.Text_1378_14476}>68%</Text>
        </View>
        <View style={styles.View_1378_14477}>
          <Text style={styles.Text_1378_14477}>20%</Text>
        </View>
        <View style={styles.View_1378_14478}>
          <Text style={styles.Text_1378_14478}>2,44</Text>
        </View>
        <View style={styles.View_1378_14479}>
          <Text style={styles.Text_1378_14479}>1,32</Text>
        </View>
        <View style={styles.View_1378_14480}>
          <Text style={styles.Text_1378_14480}>3,55</Text>
        </View>
        <View style={styles.View_1378_14481} />
        <View style={styles.View_1378_14482} />
        <View style={styles.View_1378_14483} />
        <View style={styles.View_1378_14484}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_14485}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_14486}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_14493}
          />
        </View>
        <View style={styles.View_1378_14500}>
          <Text style={styles.Text_1378_14500}>view details</Text>
        </View>
        <View style={styles.View_1378_14501} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14502}
        />
      </View>
      <View style={styles.View_1378_14503}>
        <View style={styles.View_1378_14504}>
          <Text style={styles.Text_1378_14504}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14505}>
          <Text style={styles.Text_1378_14505}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14506}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14507}
        />
        <View style={styles.View_1378_14508}>
          <Text style={styles.Text_1378_14508}>1</Text>
        </View>
        <View style={styles.View_1378_14509}>
          <Text style={styles.Text_1378_14509}>Time</Text>
        </View>
        <View style={styles.View_1378_14510}>
          <Text style={styles.Text_1378_14510}>X</Text>
        </View>
        <View style={styles.View_1378_14511}>
          <Text style={styles.Text_1378_14511}>2</Text>
        </View>
        <View style={styles.View_1378_14512}>
          <Text style={styles.Text_1378_14512}>12% </Text>
        </View>
        <View style={styles.View_1378_14513}>
          <Text style={styles.Text_1378_14513}>68%</Text>
        </View>
        <View style={styles.View_1378_14514}>
          <Text style={styles.Text_1378_14514}>20%</Text>
        </View>
        <View style={styles.View_1378_14515}>
          <Text style={styles.Text_1378_14515}>2,44</Text>
        </View>
        <View style={styles.View_1378_14516}>
          <Text style={styles.Text_1378_14516}>1,32</Text>
        </View>
        <View style={styles.View_1378_14517}>
          <Text style={styles.Text_1378_14517}>3,55</Text>
        </View>
        <View style={styles.View_1378_14518} />
        <View style={styles.View_1378_14519} />
        <View style={styles.View_1378_14520} />
        <View style={styles.View_1378_14521}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_14522}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_14523}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_14530}
          />
        </View>
        <View style={styles.View_1378_14537}>
          <Text style={styles.Text_1378_14537}>view details</Text>
        </View>
        <View style={styles.View_1378_14538} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14539}
        />
      </View>
      <View style={styles.View_1378_14540}>
        <View style={styles.View_1378_14541}>
          <Text style={styles.Text_1378_14541}>Manchester</Text>
        </View>
        <View style={styles.View_1378_14542}>
          <Text style={styles.Text_1378_14542}>Liverpool</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d850/0eb5/91673b1e1488501ce0d0cfd1688967b8"
          }}
          style={styles.ImageBackground_1378_14543}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/49ea/f828/8b5ac31eb915f581d135ae157ec4a437"
          }}
          style={styles.ImageBackground_1378_14544}
        />
        <View style={styles.View_1378_14545}>
          <Text style={styles.Text_1378_14545}>1</Text>
        </View>
        <View style={styles.View_1378_14546}>
          <Text style={styles.Text_1378_14546}>Time</Text>
        </View>
        <View style={styles.View_1378_14547}>
          <Text style={styles.Text_1378_14547}>X</Text>
        </View>
        <View style={styles.View_1378_14548}>
          <Text style={styles.Text_1378_14548}>2</Text>
        </View>
        <View style={styles.View_1378_14549}>
          <Text style={styles.Text_1378_14549}>12% </Text>
        </View>
        <View style={styles.View_1378_14550}>
          <Text style={styles.Text_1378_14550}>68%</Text>
        </View>
        <View style={styles.View_1378_14551}>
          <Text style={styles.Text_1378_14551}>20%</Text>
        </View>
        <View style={styles.View_1378_14552}>
          <Text style={styles.Text_1378_14552}>2,44</Text>
        </View>
        <View style={styles.View_1378_14553}>
          <Text style={styles.Text_1378_14553}>1,32</Text>
        </View>
        <View style={styles.View_1378_14554}>
          <Text style={styles.Text_1378_14554}>3,55</Text>
        </View>
        <View style={styles.View_1378_14555} />
        <View style={styles.View_1378_14556} />
        <View style={styles.View_1378_14557} />
        <View style={styles.View_1378_14558}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b3f5/0799/75515fc267c5dd5240567ce91543e186"
            }}
            style={styles.ImageBackground_1378_14559}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f338/c020/8ab0c4ec185b57ed8a5c7c5a114a7629"
            }}
            style={styles.ImageBackground_1378_14560}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05ca/7679/cdad8eaf2ac0be66c96e749548a3e9aa"
            }}
            style={styles.ImageBackground_1378_14567}
          />
        </View>
        <View style={styles.View_1378_14574}>
          <Text style={styles.Text_1378_14574}>view details</Text>
        </View>
        <View style={styles.View_1378_14575} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14576}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/78ac/fd6d/9eaf33fc967b508c37aea7ae3fd9f217"
          }}
          style={styles.ImageBackground_1378_14577}
        />
      </View>
      <View style={styles.View_1378_14578}>
        <View style={styles.View_1378_14579} />
        <View style={styles.View_1378_14580}>
          <Text style={styles.Text_1378_14580}>BET NOW</Text>
        </View>
      </View>
      <View style={styles.View_1378_14581} />
      <View style={styles.View_1378_14582}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2e8f/c737/d841c7c2c1ac385ba64f458998ba834f"
          }}
          style={styles.ImageBackground_1378_14583}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/782e/0f29/f5935e1bdfc7a4c3f0da0d3801681dd2"
          }}
          style={styles.ImageBackground_1378_14584}
        />
      </View>
      <View style={styles.View_1378_14585}>
        <View style={styles.View_1378_14586} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c8a/dfd6/6b80ee4cb3d2d137fd351959b6ee251f"
          }}
          style={styles.ImageBackground_1378_14587}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8bcf/390b/1df5af2071048af42fe88d3c8916fda9"
          }}
          style={styles.ImageBackground_1378_14588}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e41/4dad/b9186fcb12118e6a2063346bab84e453"
          }}
          style={styles.ImageBackground_1378_14589}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/926f/9b31/37788a3e53bc1cad08fb891a371b0d71"
          }}
          style={styles.ImageBackground_1378_14590}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11a0/81a1/a78833a04721af7363b42f726483b0ca"
          }}
          style={styles.ImageBackground_1378_14591}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c447/5112/eadcf61a2474657e24f19c27d7d7466d"
          }}
          style={styles.ImageBackground_1378_14592}
        />
      </View>
      <View style={styles.View_1378_14593}>
        <Text style={styles.Text_1378_14593}>MY TOTAL: 60 P</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/867b/b616/7656a34301d0758c029f20cadfed94dd"
        }}
        style={styles.ImageBackground_1378_14594}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b446/3be4/afb2ce9aea83a74493d7afc42afe656e"
        }}
        style={styles.ImageBackground_1378_14595}
      />
      <View style={styles.View_1378_14596}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6005/0493/8cb36d023c337fff693b650df66621e4"
          }}
          style={styles.ImageBackground_1378_14597}
        />
        <View style={styles.View_1378_14598}>
          <Text style={styles.Text_1378_14598}>4 856 081 P</Text>
        </View>
        <View style={styles.View_1378_14599}>
          <Text style={styles.Text_1378_14599}>prize fond</Text>
        </View>
      </View>
      <View style={styles.View_1378_14600}>
        <View style={styles.View_1378_14601}>
          <Text style={styles.Text_1378_14601}>0 hours 03 min 27 sec</Text>
        </View>
        <View style={styles.View_1378_14602}>
          <Text style={styles.Text_1378_14602}>Time remaining</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92ce/e3fb/358be35ded4f8d4d82771523af229501"
          }}
          style={styles.ImageBackground_1378_14603}
        />
      </View>
      <View style={styles.View_1378_14604}>
        <Text style={styles.Text_1378_14604}>DRAW № 496</Text>
      </View>
      <View style={styles.View_1378_14605}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c89d/a589/20bf081ef333d48a198451202b9c14f9"
          }}
          style={styles.ImageBackground_1378_14606}
        />
        <View style={styles.View_1378_14607}>
          <Text style={styles.Text_1378_14607}>Select match</Text>
        </View>
        <View style={styles.View_1378_14608}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee8c/8f2e/a9a5667fa32ddc09e159954afd4cefd8"
            }}
            style={styles.ImageBackground_1378_14609}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c65a/c7de/54b034669e8aacf797491cce69b0c03a"
          }}
          style={styles.ImageBackground_1378_14611}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14612}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14613}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14614}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14615}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14616}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/febc/5568/1de268dab2de4ec5cf560622f9cec7f1"
        }}
        style={styles.ImageBackground_1378_14617}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/29d6/c8e9/752b7b57134ba7c219af4b69bbf189cf"
        }}
        style={styles.ImageBackground_1378_14618}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c742/75ad/fad395d98cc0f9eb97cf213afb8d5e1e"
        }}
        style={styles.ImageBackground_1378_14620}
      />
      <View style={styles.View_1378_14621}>
        <Text style={styles.Text_1378_14621}>Help</Text>
      </View>
      <View style={styles.View_1378_14622}>
        <Text style={styles.Text_1378_14622}>Contact Us</Text>
      </View>
      <View style={styles.View_1378_14623}>
        <Text style={styles.Text_1378_14623}>Mobile Apps</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7df8/4ebc/1336703b484be690f8e23e039d57a8fc"
        }}
        style={styles.ImageBackground_1378_14624}
      />
      <View style={styles.View_1378_14626}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7443/dda1/7b51859be688164435b2af746223e72d"
          }}
          style={styles.ImageBackground_I1378_14626_282_6132}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7892/c1ea/de3f766dda80bddeaaca16dbe3647481"
          }}
          style={styles.ImageBackground_I1378_14626_988_6517}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2b3f/e3fb/7db2d0b297f2e1a6c142be9c13729ca7"
          }}
          style={styles.ImageBackground_I1378_14626_988_6519}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/a9d7/a808783b1a426c2d8d35eec3c80c4546"
          }}
          style={styles.ImageBackground_I1378_14626_988_6521}
        />
        <View style={styles.View_I1378_14626_988_6522}>
          <Text style={styles.Text_I1378_14626_988_6522}>Home</Text>
        </View>
        <View style={styles.View_I1378_14626_1364_3889}>
          <Text style={styles.Text_I1378_14626_1364_3889}>Results</Text>
        </View>
        <View style={styles.View_I1378_14626_988_6523}>
          <Text style={styles.Text_I1378_14626_988_6523}>History</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1f87/946c/3ab8c968fc445931fe1ba6ec9e930ae9"
          }}
          style={styles.ImageBackground_I1378_14626_988_6524}
        />
        <View style={styles.View_I1378_14626_1364_676}>
          <View style={styles.View_I1378_14626_1364_677}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e0a8/ceb9/7d14d4cf1aac5331b12b0e3ead2bf7dd"
              }}
              style={styles.ImageBackground_I1378_14626_1364_678}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/09c2/2175/507dc86c48ca17d66c7029c154ce5b2c"
              }}
              style={styles.ImageBackground_I1378_14626_1364_682}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e8e/21b4/9cbc39cb1c85fdbc22f2e7a141a74a80"
              }}
              style={styles.ImageBackground_I1378_14626_1364_684}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aad3/6c55/940837b04537e41909ae352fbbb04d32"
              }}
              style={styles.ImageBackground_I1378_14626_1364_686}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0eff/a0f3/74ccd44d9775c70cd68d2c38af17e92d"
              }}
              style={styles.ImageBackground_I1378_14626_1364_688}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cdb/13ff/2a5c1b5900421cb08c2b0ce2c7e119a7"
              }}
              style={styles.ImageBackground_I1378_14626_1364_690}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14626_1364_692}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14626_1364_694}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82e5/2ac0/2354ae66fa38914669617f8d242c1963"
              }}
              style={styles.ImageBackground_I1378_14626_1364_696}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14626_1364_698}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5ac/4b98/aed322c6920435160838a487e026c9ae"
              }}
              style={styles.ImageBackground_I1378_14626_1364_700}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cdc/6045/dbc06947304927748b610ea000f55d73"
              }}
              style={styles.ImageBackground_I1378_14626_1364_702}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/720b/17b3/16ce33446d37af6c6285cc39c2270cc9"
              }}
              style={styles.ImageBackground_I1378_14626_1364_704}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14626_1364_706}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cded/aea6/3ba0e67f257c63a7bdf60f41772bf286"
              }}
              style={styles.ImageBackground_I1378_14626_1364_708}
            />
          </View>
          <View style={styles.View_I1378_14626_1364_710}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/c4bc/f5025ebf9fa21253256e8e6609c12f95"
              }}
              style={styles.ImageBackground_I1378_14626_1364_711}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/871f/5cef/8cedd9500a12408982f2e93fea88bb62"
              }}
              style={styles.ImageBackground_I1378_14626_1364_713}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d07/0616/e9f729e081d510fa1e2c9979c6098443"
              }}
              style={styles.ImageBackground_I1378_14626_1364_715}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2475/5ccc/94641c3e81d91e9b3057e334dede2698"
              }}
              style={styles.ImageBackground_I1378_14626_1364_717}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c8cd/ebf9/8269319277d39e1d4e040e0ed92180ed"
              }}
              style={styles.ImageBackground_I1378_14626_1364_719}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9eba/d401/4a377409d3c95f7296fa162b363831e2"
              }}
              style={styles.ImageBackground_I1378_14626_1364_721}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f112/243b/2b142e314a54e1abb992ac34be8c08d4"
              }}
              style={styles.ImageBackground_I1378_14626_1364_723}
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
  ImageBackground_1378_14249: {
    width: 375,
    minWidth: 375,
    height: 1613,
    minHeight: 1613,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14250: {
    width: 341,
    minWidth: 341,
    height: 1305,
    minHeight: 1305,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 73,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1378_14251: {
    width: 342,
    minWidth: 342,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_14252: {
    width: 341,
    height: 33,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_14253: {
    width: 21,
    height: 15.400001525878906,
    top: 8.800003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 294,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1378_14254: {
    width: 178,
    minWidth: 178,
    height: 9.072376251220703,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 276
  },
  View_1378_14255: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_14255: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14256: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_14256: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14257: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_14257: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14258: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_14258: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14259: {
    width: 178,
    minWidth: 178,
    height: 9.072376251220703,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32,
    top: 408
  },
  View_1378_14260: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 0
  },
  Text_1378_14260: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14261: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_1378_14261: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14262: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0
  },
  Text_1378_14262: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14263: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 173,
    top: 0
  },
  Text_1378_14263: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14264: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290,
    top: 270,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14265: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.378242492675781,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14266: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.549774169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14273: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.3784637451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14280: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 308
  },
  Text_1378_14280: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14281: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 72
  },
  View_1378_14282: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(1, 31, 135, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_1378_14283: {
    width: 341,
    minWidth: 341,
    height: 122,
    minHeight: 122,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14284: {
    width: 341.4996032714844,
    minWidth: 341.4996032714844,
    height: 121.82149505615234,
    minHeight: 121.82149505615234,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.750244140625,
    top: 72,
    backgroundColor: "rgba(1, 31, 135, 1)",
    opacity: 0.5799999833106995,
    borderTopLeftRadius: 9.985368728637695,
    borderTopRightRadius: 9.985368728637695,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_1378_14285: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 229
  },
  View_1378_14286: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14287: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14288: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_14288: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14289: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_14289: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14290: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_14290: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14291: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_14292: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    resizeMode: "cover"
  },
  View_1378_14293: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 361
  },
  View_1378_14294: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14295: {
    width: 293.6960754394531,
    minWidth: 293.6960754394531,
    height: 48.24538803100586,
    minHeight: 48.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14296: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33,
    top: 10
  },
  Text_1378_14296: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14297: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 222,
    top: 10
  },
  Text_1378_14297: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14298: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 10
  },
  Text_1378_14298: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14299: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 199,
    top: 0,
    resizeMode: "cover"
  },
  ImageBackground_1378_14300: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2,
    resizeMode: "cover"
  },
  View_1378_14301: {
    width: 159.40032958984375,
    minWidth: 159.40032958984375,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 296
  },
  View_1378_14302: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.9453125,
    top: 18.160888671875
  },
  Text_1378_14302: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14303: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_14303: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14304: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 18
  },
  Text_1378_14304: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14305: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_14305: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14306: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_14306: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14307: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_14307: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14308: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14309: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14310: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14311: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 37,
    top: 440
  },
  Text_1378_14311: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14312: {
    width: 159.40032958984375,
    minWidth: 159.40032958984375,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84,
    top: 428
  },
  View_1378_14313: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14314: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 18
  },
  Text_1378_14314: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14315: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 117,
    top: 18
  },
  Text_1378_14315: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14316: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 63,
    top: 18
  },
  Text_1378_14316: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14317: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_1378_14317: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14318: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 60,
    top: 6
  },
  Text_1378_14318: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14319: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 113,
    top: 6
  },
  Text_1378_14319: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14320: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52,
    top: 0,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14321: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 105,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14322: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 307
  },
  Text_1378_14322: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14323: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253,
    top: 298,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_14324: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 290,
    top: 402,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14325: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.37823486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14326: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.549774169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14333: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.3784637451171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14340: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 253,
    top: 430,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_14341: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 269,
    top: 439
  },
  Text_1378_14341: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_14342: {
    width: 341,
    minWidth: 341,
    height: 0.000029811166314175352,
    minHeight: 0.000029811166314175352,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 350.9999694824219
  },
  View_1378_14343: {
    width: 341,
    minWidth: 341,
    height: 164,
    minHeight: 164,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 428
  },
  View_1378_14344: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 75
  },
  Text_1378_14344: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14345: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 75
  },
  Text_1378_14345: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14346: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 75
  },
  Text_1378_14346: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14347: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 65,
    resizeMode: "cover"
  },
  ImageBackground_1378_14348: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 67,
    resizeMode: "cover"
  },
  View_1378_14349: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 111
  },
  Text_1378_14349: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14350: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 111
  },
  Text_1378_14350: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14351: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 111
  },
  Text_1378_14351: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14352: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 111
  },
  Text_1378_14352: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14353: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 143
  },
  Text_1378_14353: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14354: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 149.160888671875
  },
  Text_1378_14354: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14355: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 149
  },
  Text_1378_14355: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14356: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 149
  },
  Text_1378_14356: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14357: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 137
  },
  Text_1378_14357: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14358: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 137
  },
  Text_1378_14358: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14359: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 137
  },
  Text_1378_14359: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14360: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14361: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 0,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14362: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14363: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 131,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  ImageBackground_1378_14364: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 109.378173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.3779296875
  },
  ImageBackground_1378_14365: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 109.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278.158203125
  },
  ImageBackground_1378_14372: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 109.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 277.08935546875
  },
  View_1378_14379: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 142
  },
  Text_1378_14379: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14380: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 133,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14381: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 55
  },
  View_1378_14382: {
    width: 341,
    minWidth: 341,
    height: 109,
    minHeight: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 614
  },
  View_1378_14383: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_14383: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14384: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_14384: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14385: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_14385: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14386: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_14387: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_14388: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_14388: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14389: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_14389: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14390: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_14390: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14391: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_14391: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14392: {
    width: 16,
    minWidth: 16,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 88
  },
  Text_1378_14392: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14393: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_14393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14394: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_14394: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14395: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_14395: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14396: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_14396: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14397: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_14397: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14398: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_14398: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14399: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14400: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14401: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14402: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14403: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.37823486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14404: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.549774169921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14411: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.378448486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14418: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_14418: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14419: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14420: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14421: {
    width: 341,
    minWidth: 341,
    height: 492,
    minHeight: 492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 747
  },
  View_1378_14422: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_14422: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14423: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_14423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14424: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_14424: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14425: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_14426: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_14427: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_14427: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14428: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_14428: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14429: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_14429: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14430: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_14430: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14431: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 88
  },
  Text_1378_14431: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14432: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 222
  },
  Text_1378_14432: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14433: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 354
  },
  Text_1378_14433: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14434: {
    width: 31,
    minWidth: 31,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 485
  },
  Text_1378_14434: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14435: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_14435: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14436: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_14436: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14437: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_14437: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14438: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_14438: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14439: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_14439: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14440: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_14440: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14441: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14442: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14443: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14444: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14445: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.37823486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14446: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.54974365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14453: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37847900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14460: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_14460: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14461: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14462: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14463: {
    width: 341,
    minWidth: 341,
    height: 324.2453918457031,
    minHeight: 324.2453918457031,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 880
  },
  View_1378_14464: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_14464: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14465: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_14465: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14466: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 20
  },
  Text_1378_14466: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14467: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 153
  },
  Text_1378_14467: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14468: {
    width: 83.32030487060547,
    minWidth: 83.32030487060547,
    minHeight: 38.24538803100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 156,
    top: 286
  },
  Text_1378_14468: {
    color: "rgba(1, 31, 135, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14469: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_14470: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_14471: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_14471: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14472: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_14472: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14473: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_14473: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14474: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_14474: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14475: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_14475: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14476: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_14476: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14477: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_14477: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14478: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_14478: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14479: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_14479: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14480: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_14480: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14481: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14482: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14483: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14484: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14485: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.37823486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14486: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.54974365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14493: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37847900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14500: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_14500: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14501: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14502: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14503: {
    width: 341,
    minWidth: 341,
    height: 109,
    minHeight: 109,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 1013
  },
  View_1378_14504: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_14504: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14505: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 248,
    top: 20
  },
  Text_1378_14505: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14506: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 225,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_14507: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_14508: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_14508: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14509: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_14509: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14510: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_14510: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14511: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_14511: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14512: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_14512: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14513: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_14513: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14514: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_14514: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14515: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_14515: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14516: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_14516: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14517: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_14517: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14518: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14519: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14520: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14521: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14522: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.37823486328125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14523: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.54974365234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14530: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37847900390625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14537: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_14537: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14538: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14539: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14540: {
    width: 341,
    minWidth: 341,
    height: 136.00003051757812,
    minHeight: 136.00003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17,
    top: 1146
  },
  View_1378_14541: {
    width: 111,
    minWidth: 111,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 59,
    top: 20
  },
  Text_1378_14541: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14542: {
    width: 71.6960678100586,
    minWidth: 71.6960678100586,
    minHeight: 15.208256721496582,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 249,
    top: 20
  },
  Text_1378_14542: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_1378_14543: {
    width: 17,
    minWidth: 17,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 226,
    top: 10,
    resizeMode: "cover"
  },
  ImageBackground_1378_14544: {
    width: 25,
    minWidth: 25,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 28,
    top: 12,
    resizeMode: "cover"
  },
  View_1378_14545: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 56
  },
  Text_1378_14545: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14546: {
    width: 36,
    minWidth: 36,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15,
    top: 56
  },
  Text_1378_14546: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14547: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 134,
    top: 56
  },
  Text_1378_14547: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14548: {
    width: 5,
    minWidth: 5,
    minHeight: 9.072376251220703,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 188,
    top: 56
  },
  Text_1378_14548: {
    color: "rgba(57, 57, 57, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14549: {
    width: 60.14640426635742,
    minWidth: 60.14640426635742,
    minHeight: 14.839045524597168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 77.9453125,
    top: 94.160888671875
  },
  Text_1378_14549: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14550: {
    width: 42.40032196044922,
    minWidth: 42.40032196044922,
    minHeight: 10.460813522338867,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 184,
    top: 94
  },
  Text_1378_14550: {
    color: "rgba(51, 198, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14551: {
    width: 71.88163757324219,
    minWidth: 71.88163757324219,
    minHeight: 12.941250801086426,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 130,
    top: 94
  },
  Text_1378_14551: {
    color: "rgba(255, 184, 0, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14552: {
    width: 20,
    minWidth: 20,
    minHeight: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 76,
    top: 82
  },
  Text_1378_14552: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14553: {
    width: 26,
    minWidth: 26,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 82
  },
  Text_1378_14553: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14554: {
    width: 22,
    minWidth: 22,
    minHeight: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 180,
    top: 82
  },
  Text_1378_14554: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14555: {
    width: 36,
    minWidth: 36,
    height: 32.82352828979492,
    minHeight: 32.82352828979492,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14556: {
    width: 36,
    minWidth: 36,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 172,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.3888843357563019,
    borderTopLeftRadius: 3.888843536376953,
    borderTopRightRadius: 3.888843536376953,
    borderBottomLeftRadius: 3.888843536376953,
    borderBottomRightRadius: 3.888843536376953
  },
  View_1378_14557: {
    width: 36.24590301513672,
    minWidth: 36.24590301513672,
    height: 33,
    minHeight: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 67,
    top: 76,
    borderColor: "rgba(232, 232, 233, 1)",
    borderWidth: 0.44591301679611206,
    borderTopLeftRadius: 4.45913028717041,
    borderTopRightRadius: 4.45913028717041,
    borderBottomLeftRadius: 4.45913028717041,
    borderBottomRightRadius: 4.45913028717041
  },
  View_1378_14558: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 273,
    top: 50,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14559: {
    width: 11.24303913116455,
    height: 11.243053436279297,
    top: 4.3782958984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.378173828125
  },
  ImageBackground_1378_14560: {
    width: 12.13059139251709,
    height: 12.947348594665527,
    top: 4.5498046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.158203125
  },
  ImageBackground_1378_14567: {
    width: 14.126415252685547,
    height: 13.6608247756958,
    top: 4.37841796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.089111328125
  },
  View_1378_14574: {
    width: 59,
    minWidth: 59,
    minHeight: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 252,
    top: 87
  },
  Text_1378_14574: {
    color: "rgba(90, 131, 255, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14575: {
    width: 93,
    minWidth: 93,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 78,
    borderColor: "rgba(90, 131, 255, 1)",
    borderWidth: 1,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  ImageBackground_1378_14576: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_1378_14577: {
    width: 341,
    minWidth: 341,
    height: 0.00002981116995215416,
    minHeight: 0.00002981116995215416,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 136
  },
  View_1378_14578: {
    width: 134,
    minWidth: 134,
    height: 41,
    minHeight: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 1297,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1378_14579: {
    width: 134,
    height: 41,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(90, 131, 255, 1)",
    borderTopLeftRadius: 20.693439483642578,
    borderTopRightRadius: 20.693439483642578,
    borderBottomLeftRadius: 20.693439483642578,
    borderBottomRightRadius: 20.693439483642578
  },
  View_1378_14580: {
    width: 61,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36
  },
  Text_1378_14580: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14581: {
    width: 156,
    height: 318,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    backgroundColor: "rgba(253, 253, 253, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_1378_14582: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 307.28857421875,
    top: 1298.5
  },
  ImageBackground_1378_14583: {
    width: 19,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10
  },
  ImageBackground_1378_14584: {
    width: 38,
    minWidth: 38,
    height: 38,
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_1378_14585: {
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
  View_1378_14586: {
    width: 375,
    height: 52,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(253, 253, 253, 1)"
  },
  ImageBackground_1378_14587: {
    width: 68.78099822998047,
    height: 9,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 270
  },
  ImageBackground_1378_14588: {
    width: 10,
    height: 6.110935688018799,
    top: 13.999908447265625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 349
  },
  ImageBackground_1378_14589: {
    width: 33,
    height: 31,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 227
  },
  ImageBackground_1378_14590: {
    width: 12,
    height: 12,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 287,
    resizeMode: "cover"
  },
  ImageBackground_1378_14591: {
    width: 12,
    height: 9,
    top: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271,
    resizeMode: "cover"
  },
  ImageBackground_1378_14592: {
    width: 115.28089904785156,
    height: 24.60260009765625,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16,
    resizeMode: "cover"
  },
  View_1378_14593: {
    width: 66,
    top: 41,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 271
  },
  Text_1378_14593: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 8,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_14594: {
    width: 6.842105388641357,
    height: 13,
    top: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38
  },
  ImageBackground_1378_14595: {
    width: 6.840000152587891,
    height: 13,
    top: 87,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 330.31591796875
  },
  View_1378_14596: {
    width: 106.79479217529297,
    minWidth: 106.79479217529297,
    height: 29.004201889038086,
    minHeight: 29.004201889038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 39.205078125,
    top: 150.998046875
  },
  ImageBackground_1378_14597: {
    width: 31.293546676635742,
    height: 23.096546173095703,
    top: 2.5594472885131836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_14598: {
    width: 69.76112365722656,
    minWidth: 69.76112365722656,
    minHeight: 15.313416481018066,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36.650634765625,
    top: 13.690810203552246
  },
  Text_1378_14598: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.565262794494629,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14599: {
    width: 73.16410064697266,
    minWidth: 73.16410064697266,
    minHeight: 15.313416481018066,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 33.630615234375,
    top: 0.0000247955322265625
  },
  Text_1378_14599: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.565262794494629,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_1378_14600: {
    width: 116.60650634765625,
    minWidth: 116.60650634765625,
    height: 24.743228912353516,
    minHeight: 24.743228912353516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 152.88623046875
  },
  View_1378_14601: {
    width: 90.82102966308594,
    minWidth: 90.82102966308594,
    minHeight: 10.790616989135742,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.785400390625,
    top: 13.952610969543457
  },
  Text_1378_14601: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7.137870788574219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "lowercase"
  },
  View_1378_14602: {
    width: 89.92180633544922,
    minWidth: 89.92180633544922,
    minHeight: 13.488271713256836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.256103515625,
    top: 0
  },
  Text_1378_14602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9.168508529663086,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_1378_14603: {
    width: 19.974679946899414,
    height: 24.31699562072754,
    top: 0.00013065338134765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_14604: {
    width: 109,
    minWidth: 109,
    minHeight: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133.9375,
    top: 85
  },
  Text_1378_14604: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_1378_14605: {
    width: 94.17778015136719,
    minWidth: 94.17778015136719,
    height: 26,
    minHeight: 26,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 139.9111328125,
    top: 110,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1378_14606: {
    width: 94.17778015136719,
    height: 26,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_1378_14607: {
    width: 53,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.0888671875
  },
  Text_1378_14607: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 7,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_14608: {
    width: 12,
    height: 12,
    top: 8,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.0888671875,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1378_14609: {
    width: 12,
    height: 11.999669075012207,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_1378_14611: {
    width: 7.999966144561768,
    height: 4.404754638671875,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 79.0888671875
  },
  ImageBackground_1378_14612: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 59
  },
  ImageBackground_1378_14613: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 102
  },
  ImageBackground_1378_14614: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 145
  },
  ImageBackground_1378_14615: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 188
  },
  ImageBackground_1378_14616: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 231
  },
  ImageBackground_1378_14617: {
    width: 156,
    minWidth: 156,
    height: 0.000013637953998113517,
    minHeight: 0.000013637953998113517,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 274
  },
  ImageBackground_1378_14618: {
    width: 8.109678268432617,
    height: 15,
    top: 242,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 241
  },
  ImageBackground_1378_14620: {
    width: 20,
    height: 20,
    top: 198,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 234
  },
  View_1378_14621: {
    width: 25,
    minWidth: 25,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267,
    top: 203
  },
  Text_1378_14621: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_14622: {
    width: 59,
    minWidth: 59,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267,
    top: 244
  },
  Text_1378_14622: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1378_14623: {
    width: 67,
    minWidth: 67,
    minHeight: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 267,
    top: 289
  },
  Text_1378_14623: {
    color: "rgba(0, 28, 113, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1378_14624: {
    width: 20.740297317504883,
    height: 20.586666107177734,
    top: 284,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 231
  },
  View_1378_14626: {
    width: 375,
    minWidth: 375,
    height: 52,
    minHeight: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 1452,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I1378_14626_282_6132: {
    flexGrow: 1,
    width: 375,
    height: 52,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_I1378_14626_988_6517: {
    flexGrow: 1,
    width: 49.65380859375,
    height: 6.837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 110,
    top: 36
  },
  ImageBackground_I1378_14626_988_6519: {
    flexGrow: 1,
    width: 30.00023651123047,
    height: 19.159626007080078,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 120,
    top: 10
  },
  ImageBackground_I1378_14626_988_6521: {
    flexGrow: 1,
    width: 20,
    height: 18.33333396911621,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31,
    top: 11
  },
  View_I1378_14626_988_6522: {
    flexGrow: 1,
    width: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 29,
    top: 34
  },
  Text_I1378_14626_988_6522: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14626_1364_3889: {
    flexGrow: 1,
    width: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 34
  },
  Text_I1378_14626_1364_3889: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I1378_14626_988_6523: {
    flexGrow: 1,
    width: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 34
  },
  Text_I1378_14626_988_6523: {
    color: "rgba(139, 139, 139, 1)",
    fontSize: 7,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  ImageBackground_I1378_14626_988_6524: {
    flexGrow: 1,
    width: 20,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 314.763671875,
    top: 11
  },
  View_I1378_14626_1364_676: {
    flexGrow: 1,
    width: 26.763774871826172,
    height: 21.32741928100586,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 9
  },
  View_I1378_14626_1364_677: {
    width: 26.763774871826172,
    height: 21.32741928100586,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14626_1364_678: {
    width: 26.763774871826172,
    height: 7.109440326690674,
    top: 14.2177734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14626_1364_682: {
    width: 3.029043436050415,
    height: 5.436952590942383,
    top: 15.8905029296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.700439453125
  },
  ImageBackground_I1378_14626_1364_684: {
    width: 1.4359464645385742,
    height: 2.9269301891326904,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_14626_1364_686: {
    width: 1.634328842163086,
    height: 2.510079860687256,
    top: 18.817138671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_14626_1364_688: {
    width: 2.2307350635528564,
    height: 3.76133394241333,
    top: 14.2183837890625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.236572265625
  },
  ImageBackground_I1378_14626_1364_690: {
    width: 1.4360383749008179,
    height: 2.926727533340454,
    top: 16.3094482421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.325927734375
  },
  ImageBackground_I1378_14626_1364_692: {
    width: 3.6636908054351807,
    height: 0.836363673210144,
    top: 15.890869140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.06640625
  },
  ImageBackground_I1378_14626_1364_694: {
    width: 4.219037055969238,
    height: 0.836363673210144,
    top: 18.818115234375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21.428955078125
  },
  ImageBackground_I1378_14626_1364_696: {
    width: 3.901637077331543,
    height: 0.836363673210144,
    top: 17.1455078125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20.632080078125
  },
  ImageBackground_I1378_14626_1364_698: {
    width: 4.363308906555176,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.599853515625
  },
  ImageBackground_I1378_14626_1364_700: {
    width: 4.324418067932129,
    height: 0.836363673210144,
    top: 16.3092041015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13.8388671875
  },
  ImageBackground_I1378_14626_1364_702: {
    width: 10.761491775512695,
    height: 0.836363673210144,
    top: 18.3997802734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.001220703125
  },
  ImageBackground_I1378_14626_1364_704: {
    width: 13.381818771362305,
    height: 17.98181915283203,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.690673828125
  },
  ImageBackground_I1378_14626_1364_706: {
    width: 6.869472980499268,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.18212890625
  },
  ImageBackground_I1378_14626_1364_708: {
    width: 6.8698930740356445,
    height: 0.836363673210144,
    top: 14.21826171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.71240234375
  },
  View_I1378_14626_1364_710: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 2.0888671875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.775634765625
  },
  ImageBackground_I1378_14626_1364_711: {
    width: 9.199999809265137,
    height: 9.19999885559082,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_I1378_14626_1364_713: {
    width: 3.3703079223632812,
    height: 2.6731395721435547,
    top: 0.125732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.189453125
  },
  ImageBackground_I1378_14626_1364_715: {
    width: 2.113673686981201,
    height: 3.861211061477661,
    top: 3.856201171875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.0693359375
  },
  ImageBackground_I1378_14626_1364_717: {
    width: 4.0476789474487305,
    height: 1.6777453422546387,
    top: 7.2000732421875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.576416015625
  },
  ImageBackground_I1378_14626_1364_719: {
    width: 2.1152143478393555,
    height: 3.860804319381714,
    top: 3.8565673828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0166015625
  },
  ImageBackground_I1378_14626_1364_721: {
    width: 3.369419813156128,
    height: 2.6729161739349365,
    top: 0.1258544921875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.64306640625
  },
  ImageBackground_I1378_14626_1364_723: {
    width: 3.915950298309326,
    height: 3.763637065887451,
    top: 2.5091552734375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.64501953125
  },
  View_2: { height: 1504 }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
