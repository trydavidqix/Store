import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

interface ShoesProps {
  img: any;
  children: string;
  cost: string;
  onClick?: () => void;
}

export default function Shoes(props: ShoesProps) {
  function filterDesc(desc: string): string {
    if (desc.length < 27) {
      return desc;
    }

    return `${desc.substring(0, 23)}...`;
  }

  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image source={props.img} style={styles.shoesImg} />
      <Text style={styles.shoesText}>{filterDesc(props.children)}</Text>
      <View style={{ opacity: 0.4 }}>
        <Text style={styles.shoesText}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: "2%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  shoesImg: {
    width: 175,
    height: 175,
  },
  shoesText: {
    fontSize: 16,
    marginTop: 8,
  },
});
