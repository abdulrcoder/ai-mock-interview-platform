import useSpeechToText from "react-hook-speech-to-text";

const useSpeechRecognition = () => {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false,
  });

  const stopRecordingAndGetAnswer = async () => {
    stopSpeechToText();
    if (results.length > 0) {
      return results.map((result) => result.transcript).join(" ");
    }
    return "";
  };

  return {
    error,
    interimResult,
    isRecording,
    startSpeechToText,
    stopRecordingAndGetAnswer,
  };
};

export default useSpeechRecognition;
