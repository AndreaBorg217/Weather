/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node***REMOVED*** from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
***REMOVED*** from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
***REMOVED*** from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title***REMOVED***): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer***REMOVED***>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
    ***REMOVED***,
        ]***REMOVED***>
        {title***REMOVED***
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
    ***REMOVED***,
        ]***REMOVED***>
        {children***REMOVED***
      </Text>
    </View>
  );
***REMOVED***;

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  ***REMOVED***;

  return (
    <SafeAreaView style={backgroundStyle***REMOVED***>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'***REMOVED*** />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle***REMOVED***>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
    ***REMOVED******REMOVED***>
          <Section title="Step One">
            Edit <Text style={styles.highlight***REMOVED***>App.js</Text> to change this
            screen and then come back to see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
***REMOVED***;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  ***REMOVED***,
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  ***REMOVED***,
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  ***REMOVED***,
  highlight: {
    fontWeight: '700',
  ***REMOVED***,
***REMOVED***);

export default App;
