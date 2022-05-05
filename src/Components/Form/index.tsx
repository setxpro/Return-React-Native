import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { 
  View,
  TextInput,
  Image,
  Text,
  TouchableOpacity
 } from 'react-native';
import { theme } from '../../theme';

import { FeedbackType } from '../Widget'; 
import { feedbackTypes } from '../../utils/feedbackTypes';

import { styles } from './styles';
import { ScreenshotButton } from '../ScreenshotButton';
import { ButtonSendFeedback } from '../ButtonSendFeedback';

interface Props {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }:Props) {

  const feedbackInfo = feedbackTypes[feedbackType]; // Get list feedback filter

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image
            source={feedbackInfo.image}
            style={styles.image}
          />
          <Text style={styles.titleText}>
              {feedbackInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem ? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
      />

      <View style={styles.footer}>
        <ScreenshotButton 
            onTakeShot={() => {}}
            onRemoveShot={() => {}}
            screenshot=""
        />

        <ButtonSendFeedback
           isLoading={false}
        />
      </View>

    </View>
  );
}