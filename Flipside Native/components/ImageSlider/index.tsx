import { View, Dimensions, FlatList, Image } from "react-native";
import RoundedImage from "../RoundedImage";

const { width } = Dimensions.get("window");

const ImageSlider = (props: {posts: any[], id: string}) => {

    const imageData = props.posts.map((post) => {
        return {
            timestamp: post.ms,
            text: post.phrase,
        };
    });

    return (
        <View>
            <FlatList
                data={imageData}
                keyExtractor={(item, index) => "key" + index}
                horizontal
                pagingEnabled
                renderItem={({ item }) => {
                    return (
                        <RoundedImage source={item.timestamp} text={item.text} id={props.id}/>
                    );
                }}
                style={{ width: width, height: 380, marginVertical: 10 }}
                snapToAlignment={"start"}
                decelerationRate={"fast"}
                snapToInterval={300 + 10}
                disableIntervalMomentum={true}
            />
        </View>
    );
};

export default ImageSlider;