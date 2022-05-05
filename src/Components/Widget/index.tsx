import React, { useRef } from 'react';
import { TouchableOpacity } from 'react-native';
import { theme } from '../../theme';
import { ChatTeardropDots } from 'phosphor-react-native';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './styles';
import { Options } from '../Options';

function Widget() {

    const bottomSheetRaf = useRef<BottomSheet>(null);

    function handleOpen() {
        bottomSheetRaf.current?.expand()
    }

    return (
        <>
        <TouchableOpacity style={styles.button} onPress={handleOpen}>
            <ChatTeardropDots
                size={24}
                weight="bold"
                color={theme.colors.text_primary}
            />
        </TouchableOpacity>
        <BottomSheet 
            ref={bottomSheetRaf}
            snapPoints={[1, 280]}
            backgroundStyle={styles.modal}
            handleIndicatorStyle={styles.indicator}
        >
            <Options/>
        </BottomSheet>
        </>
    );
}

export default gestureHandlerRootHOC(Widget)