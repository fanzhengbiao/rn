import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { GetFetch } from '../../Heapler/Helpers';
import { getHomeList } from './Store/HomeActions';
import { makeSelectLoading, makeSelectList } from './Store/HomeConstants';
import { Image, FlatList, StyleSheet, Text, View } from "react-native";

var REQUEST_URL =
  "https://raw.githubusercontent.com/facebook/react-native/0.51-stable/docs/MoviesExample.json";

class Home extends Component {
  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    GetFetch(REQUEST_URL).then(responseData => {
      this.props.getHomeList(responseData.movies);
    });
  }

  render() {
    if (this.props.loading) {
      return this.renderLoadingView();
    }

    return (
      <FlatList
        data={this.props.list}
        renderItem={this.renderMovie}
        style={styles.list}
        keyExtractor={item => item.id}
      />
    );
  }

  renderLoadingView() {
    return (
      <View style={styles.container}>
        <Text>Loading movies...</Text>
      </View>
    );
  }

  renderMovie({ item }) {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: item.posters.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.year}>{item.year}</Text>
        </View>
      </View>
    );
  }
}


var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  rightContainer: {
    flex: 1
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: "center"
  },
  year: {
    textAlign: "center"
  },
  thumbnail: {
    width: 53,
    height: 81
  },
  list: {
    paddingTop: 20,
    backgroundColor: "#F5FCFF"
  }
});

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading,
  list: makeSelectList
})

export default connect(mapStateToProps, { getHomeList })(Home);