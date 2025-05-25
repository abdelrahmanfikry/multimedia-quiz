// الأسئلة المضمنة في الكود
const questions = [

    //نحاس اختيارى
    {
        question: "What is the purpose of image filtering in image processing?",
        answers: ["To reduce file size", "To remove noise or detect edges", "To change color depth", "To encrypt images"],
        correct: 1
    },
    {
        question: "Which filter is typically used to reduce image noise and blur?",
        answers: ["High-pass filter", "Median filter", "Low-pass filter", "Fourier filter"],
        correct: 2
    },
    {
        question: "What is the function of a high-pass filter?",
        answers: ["Remove image", "Sharpen edges", "Smooth the image", "Change resolution"],
        correct: 1
    },
    {
        question: "Which type of filtering works directly on pixel values?",
        answers: ["Spatial filtering", "Frequency filtering", "Wavelet transform", "Histogram equalization"],
        correct: 0
    },
    {
        question: "Which technique adds black pixels around an image before filtering?",
        answers: ["Edge padding", "Zero padding", "Image stretching", "Fourier wrapping"],
        correct: 1
    },
    {
        question: "Averaging filter is a type of:",
        answers: ["High-pass filter", "Edge detection", "Low-pass filter", "Frequency filter"],
        correct: 2
    },
    {
        question: "Which spatial filter helps preserve edges while reducing noise?",
        answers: ["Max filter", "Min filter", "Median filter", "Zero padding"],
        correct: 2
    },
    {
        question: "Which filter emphasizes the differences in adjacent pixel values?",
        answers: ["Low-pass", "High-pass", "Gaussian", "Min"],
        correct: 1
    },
    {
        question: "Which type of filtering uses convolution operations?",
        answers: ["Spatial filtering", "Motion tracking", "Frequency filtering", "Histogram equalization"],
        correct: 0
    },
    {
        question: "What is the role of weighted averaging filters?",
        answers: ["To apply uniform blur", "To give equal weight to all pixels", "To prioritize central pixels", "To reduce image size"],
        correct: 2
    },
    {
        question: "What does a median filter do best?",
        answers: ["Increase brightness", "Remove salt-and-pepper noise", "Detect edges", "Apply sharpening"],
        correct: 1
    },
    {
        question: "What is the goal of smoothing filters?",
        answers: ["Detect edges", "Increase contrast", "Reduce noise and blur", "Highlight corners"],
        correct: 2
    },
    {
        question: "Which filter removes high-frequency components?",
        answers: ["Low-pass filter", "High-pass filter", "Band-pass filter", "Max filter"],
        correct: 0
    },
    {
        question: "Which filter removes low-frequency components?",
        answers: ["Low-pass filter", "High-pass filter", "Median filter", "Gaussian filter"],
        correct: 1
    },
    {
        question: "Which filter keeps only a moderate range of frequencies?",
        answers: ["Low-pass", "High-pass", "Band-pass", "Median"],
        correct: 2
    },
    {
        question: "What is the function of max filter?",
        answers: ["Keep the brightest pixel in the window", "Keep the darkest pixel in the window", "Average the window", "Remove noise"],
        correct: 0
    },
    {
        question: "What is the function of min filter?",
        answers: ["Keep the average value", "Sharpen the image", "Keep the darkest pixel in the window", "Equalize histogram"],
        correct: 2
    },
    {
        question: "Which filter is used to detect edges in specific directions?",
        answers: ["Laplacian", "Sobel filter", "Median filter", "Gaussian filter"],
        correct: 1
    },
    {
        question: "What does convolution mean in image processing?",
        answers: ["Copying the image", "Applying a mask to a pixel and its neighbors", "Cropping an image", "Drawing lines"],
        correct: 1
    },
    {
        question: "What is a typical application of sharpening filters?",
        answers: ["Blur background", "Enhance edges and fine details", "Reduce file size", "Convert to grayscale"],
        correct: 1
    },
    {
        question: "Which domain focuses on pixel intensity operations?",
        answers: ["Spatial domain", "Frequency domain", "Temporal domain", "Histogram domain"],
        correct: 0
    },
    {
        question: "Which domain focuses on frequency components?",
        answers: ["Spatial domain", "Frequency domain", "Color domain", "Pixel domain"],
        correct: 1
    },
    {
        question: "What type of filter is used in medical imaging and drone systems for detail detection?",
        answers: ["High-pass filter", "Low-pass filter", "Band-pass filter", "Median filter"],
        correct: 0
    },
    {
        question: "Which is a smoothing operation in frequency domain?",
        answers: ["High-pass filtering", "Low-pass filtering", "Edge detection", "Sobel filter"],
        correct: 1
    },
    {
        question: "What is a common application of band-pass filters?",
        answers: ["Edge enhancement and noise reduction", "Compression", "Histogram equalization", "Saturation adjustment"],
        correct: 0
    },
    {
        question: "What happens when you apply a low-pass filter on an image?",
        answers: ["Blurring and noise reduction", "Sharpening", "Grayscale conversion", "Brightness increase"],
        correct: 0
    },
    {
        question: "What is used to preserve image size during convolution?",
        answers: ["Clipping", "Zero padding", "Image stretching", "Fourier wrapping"],
        correct: 1
    },
    {
        question: "Which filter is direction-sensitive?",
        answers: ["Sobel", "Median", "Max", "Laplacian"],
        correct: 0
    },
    {
        question: "What does the term 'mask' refer to in filtering?",
        answers: ["A storage format", "A brightness control", "A matrix applied to pixels", "A noise type"],
        correct: 2
    },
    {
        question: "What type of filter is the opposite of a low-pass filter?",
        answers: ["Median", "High-pass", "Band-pass", "Max filter"],
        correct: 1
    },
    {
        question: "What is the output of applying a high-pass filter to an image?",
        answers: ["Blurred image", "Sharpened image", "Resized image", "Compressed image"],
        correct: 1
    },
    {
        question: "What is the main goal of spatial domain filtering?",
        answers: ["Compress image", "Enhance features using pixel values", "Add watermark", "Encrypt data"],
        correct: 1
    },
    {
        question: "What does frequency domain filtering modify?",
        answers: ["Pixel locations", "Color levels", "Frequency components of the image", "Transparency"],
        correct: 2
    },
    {
        question: "In frequency domain, which transform is commonly used?",
        answers: ["Median transform", "Fourier Transform", "RGB transform", "Histogram transform"],
        correct: 1
    },
    {
        question: "What does zero padding prevent during convolution?",
        answers: ["Image compression", "Loss of border information", "Color blending", "Noise introduction"],
        correct: 1
    },
    {
        question: "What type of filter is most suitable for removing impulse noise?",
        answers: ["Median", "Max", "Low-pass", "Gaussian"],
        correct: 0
    },
    {
        question: "What type of image filter is Sobel?",
        answers: ["Smoothing filter", "Edge detection filter", "Averaging filter", "Median filter"],
        correct: 1
    },
    {
        question: "What does the low-pass filter allow through?",
        answers: ["Low frequency components", "High frequency components", "Medium range only", "Salt noise only"],
        correct: 0
    },
    {
        question: "Which operation uses kernel masks in 3x3 or 5x5 size?",
        answers: ["Color grading", "Noise generation", "Spatial filtering", "Dithering"],
        correct: 2
    },
    {
        question: "What kind of noise appears as random black and white dots?",
        answers: ["Gaussian noise", "Speckle noise", "Salt-and-pepper noise", "Quantization noise"],
        correct: 2
    },
    {
        question: "Which filter is best for salt-and-pepper noise?",
        answers: ["Median filter", "Gaussian filter", "High pass filter", "Max filter"],
        correct: 0
    },
    {
        question: "What is the source of Gaussian noise?",
        answers: ["Transmission loss", "Photon reflection", "Sensor/electronic interference", "File corruption"],
        correct: 2
    },
    {
        question: "Which noise appears as grainy patterns in radar images?",
        answers: ["Salt noise", "Gaussian noise", "Speckle noise", "Quantization noise"],
        correct: 2
    },
    {
        question: "What is the solution for Poisson noise?",
        answers: ["Median filter", "Averaging multiple frames", "Frequency domain filter", "Histogram equalization"],
        correct: 1
    },
    {
        question: "What is the visual appearance of periodic noise?",
        answers: ["Random dots", "Waves or stripes", "Grainy patterns", "Black and white dots"],
        correct: 1
    },
    {
        question: "What is dithering used for?",
        answers: ["Sharpen images", "Encrypt content", "Simulate smooth gradients", "Add noise"],
        correct: 2
    },
    {
        question: "What causes quantization noise?",
        answers: ["Brightness increase", "Reducing bit depth", "Edge sharpening", "Changing hue"],
        correct: 1
    },
    {
        question: "Which type of noise is linked to ISO settings in cameras?",
        answers: ["Periodic", "Poisson", "Gaussian", "Quantization"],
        correct: 2
    },
    {
        question: "What causes salt noise?",
        answers: ["Low contrast", "Bright pixels added randomly", "Stripe patterns", "Histogram shift"],
        correct: 1
    },
    {
        question: "What does adaptive filtering handle best?",
        answers: ["Speckle noise", "Salt noise", "Banding", "Gradient loss"],
        correct: 0
    },
    {
        question: "What is the typical cause of pepper noise?",
        answers: ["Blurred objects", "Dark pixels added randomly", "Pattern distortion", "Loss of sharpness"],
        correct: 1
    },
    {
        question: "What domain is ideal for removing periodic noise?",
        answers: ["Spatial", "Frequency", "Histogram", "Pixel-based"],
        correct: 1
    },
    {
        question: "What type of filter removes both low and high frequencies?",
        answers: ["Gaussian", "Median", "Band-pass filter", "Laplacian"],
        correct: 2
    },
    {
        question: "What kind of filter keeps a specific frequency range?",
        answers: ["Max filter", "Band-pass filter", "Low-pass filter", "High-pass filter"],
        correct: 1
    },
    {
        question: "Why use median filter over averaging filter?",
        answers: ["Faster performance", "Smoother color", "Better at removing impulse noise", "Reduces resolution"],
        correct: 2
    },
    {
        question: "What kind of noise appears more in low-light conditions?",
        answers: ["Gaussian noise", "Banding noise", "Salt noise", "Quantization"],
        correct: 0
    },
    {
        question: "When transform works in the frequency domain?",
        answers: ["Pixel transformation", "Dithering", "Fourier Transform", "Padding"],
        correct: 2
    },
    {
        question: "When is the main purpose of image restoration?",
        answers: ["Resize images", "Remove degradations like blur/noise", "Crop edges", "Increase colors"],
        correct: 1
    },
    {
        question: "Which is NOT a noise type?",
        answers: ["Salt-and-pepper", "Poisson", "Periodic", "Blurring"],
        correct: 3
    },
    {
        question: "What is the primary goal of image compression?",
        answers: ["Increase file size", "Improve resolution", "Reduce data size", "Convert image to grayscale"],
        correct: 2
    },
    {
        question: "Which of the following is not a type of redundancy in image data?",
        answers: ["Coding redundancy", "Spatial redundancy", "Color redundancy", "Irrelevant information"],
        correct: 2
    },
    {
        question: "Spatial redundancy refers to:",
        answers: ["Frequency of colors in a video", "Similarities between neighboring pixels", "Pixel values over time", "Coding inefficiencies"],
        correct: 1
    },
    {
        question: "Which of the following is a lossless compression method?",
        answers: ["JPEG", "Run Length Encoding", "DCT with Quantization", "Pattern loss"],
        correct: 1
    },
    {
        question: "JPEG compression uses which of the following techniques?",
        answers: ["Run Length only", "DCT + Quantization + Huffman", "Simple substitution only", "Arithmetic coding only"],
        correct: 1
    },
    {
        question: "Run Length Encoding works best with:",
        answers: ["Highly detailed images", "Images with large areas of the same color", "Audio data", "High contrast images"],
        correct: 1
    },
    {
        question: "What is coding redundancy?",
        answers: ["Repeated frames in a video", "Using more bits than needed to represent data", "Irrelevant human vision details", "Color shifts"],
        correct: 1
    },
    {
        question: "Temporal redundancy is mostly associated with:",
        answers: ["Static images", "Video sequences", "Audio streams", "Compression ratios"],
        correct: 1
    },
    {
        question: "Which type of compression results in loss of information?",
        answers: ["Lossy", "Lossless", "Run Length Encoding", "Huffman Coding"],
        correct: 0
    },
    {
        question: "In JPEG, Huffman coding is used:",
        answers: ["Before quantization", "After quantization", "During sampling", "Before DCT"],
        correct: 1
    },
    {
        question: "The purpose of quantization in JPEG is to:",
        answers: ["Increase file size", "Reduce precision of DCT coefficients", "Add noise", "Enhance edges"],
        correct: 1
    },
    {
        question: "Irrelevant information refers to:",
        answers: ["Data ignored by the human visual system", "Critical image data", "Encrypted data", "Metadata"],
        correct: 0
    },
    {
        question: "Which is not a stage in JPEG compression?",
        answers: ["DCT", "Run-Length Suppression only", "Quantization", "Huffman Coding"],
        correct: 1
    },
    {
        question: "A key problem in Run-Length Encoding is:",
        answers: ["Inefficiency with diverse data", "Color shifts", "Audio distortion", "Poor resolution"],
        correct: 0
    },
    {
        question: "Which algorithm is typically used in lossless compression?",
        answers: ["Quantization", "Run Length Encoding", "DCT", "Color mapping"],
        correct: 1
    },
    {
        question: "Compression ratio is defined as:",
        answers: ["Original file size / 2", "Original size / Compressed size", "Bits per pixel", "Image width × height"],
        correct: 1
    },
    {
        question: "Which of the following is part of the compression system model?",
        answers: ["Image printer", "Encoder and decoder", "Display", "Monitor resolution"],
        correct: 1
    },
    {
        question: "Simple repetition suppression refers to:",
        answers: ["Adding symbols", "Removing repeated characters", "Inverting pixels", "Amplifying patterns"],
        correct: 1
    },
    {
        question: "Entropy is highest when:",
        answers: ["One symbol dominates", "All symbols are equally likely", "The image is black and white", "Pixels are sorted"],
        correct: 1
    },
    {
        question: "Which compression type is reversible?",
        answers: ["Lossy", "Lossless", "Quantization", "DCT"],
        correct: 1
    },
    {
        question: "What does DCT stand for?",
        answers: ["Digital Compression Technique", "Discrete Cosine Transform", "Data Coding Technology", "Dynamic Color Transfer"],
        correct: 1
    },
    {
        question: "Pattern substitution works by:",
        answers: ["Replacing frequency occurring patterns with shorter codes", "Adding noise", "Increasing resolution", "Changing color depth"],
        correct: 0
    },
    {
        question: "The average code length is related to:",
        answers: ["Run Length Encoding", "Huffman Coding", "Quantization", "DCT"],
        correct: 1
    },
    {
        question: "An inefficient Run Length Encoding of '12345' might result in:",
        answers: ["1121314151", "1×5", "11111111", "54321"],
        correct: 0
    },
    {
        question: "Human visual system is less sensitive to:",
        answers: ["High frequency changes", "Low frequency changes", "Color shifts", "Brightness variations"],
        correct: 0
    },
    {
        question: "Compression is essential in business for:",
        answers: ["Faster image sharing and saving space", "Increasing file size", "Reducing quality", "Adding noise"],
        correct: 0
    },
    {
        question: "DCT is most useful for:",
        answers: ["Converting spatial data into frequency domain", "Adding noise", "Increasing resolution", "Changing color depth"],
        correct: 0
    },
    {
        question: "Huffman coding uses:",
        answers: ["Fixed-length codes", "Variable-length codes", "Random codes", "No codes"],
        correct: 1
    },
    {
        question: "Which format uses both lossy and lossless techniques?",
        answers: ["JPEG", "PNG", "GIF", "BMP"],
        correct: 0
    },
    {
        question: "Lossy compression is acceptable when:",
        answers: ["No loss is allowed", "Minor quality loss is tolerable", "Exact reconstruction is required", "Medical imaging is used"],
        correct: 1
    },
    {
        question: "What is the process of converting sound-waves into numbers called?",
        answers: ["Amplifying", "Synthesizing", "Digitizing", "Modulating"],
        correct: 2
    },
    {
        question: "Which of the following is used by Windows as the default audio file format?",
        answers: ["WAV", "SND", "MP3", "WMA"],
        correct: 0
    },
    {
        question: "What determines how often samples are taken per second in digital audio?",
        answers: ["Quantization", "Sampling Rate", "Bit Depth", "Encoding"],
        correct: 1
    },
    {
        question: "Which unit is used to measure sampling rate?",
        answers: ["Hertz (Hz)", "Decibels (dB)", "Bytes", "Seconds"],
        correct: 0
    },
    {
        question: "What does 16-bit quantization mean?",
        answers: ["256 quantization levels", "1024 quantization levels", "512 quantization levels", "65536 quantization levels"],
        correct: 3
    },
    {
        question: "What is the purpose of companding in audio processing?",
        answers: ["Compress file size", "Increase sampling rate", "Reduce quantization noise", "Convert to binary"],
        correct: 2
    },
    {
        question: "What term is used for sound recorded on a single audio channel?",
        answers: ["Surround", "Stereo", "Mono", "Multi-track"],
        correct: 2
    },
    {
        question: "What is the standard sampling rate for audio CDs?",
        answers: ["22 kHz", "44 kHz", "11 kHz", "96 kHz"],
        correct: 1
    },
    {
        question: "Which of the following improves audio quality but increases file size?",
        answers: ["Lower sampling rate", "Mono audio", "Higher bit depth", "Smaller file format"],
        correct: 2
    },
    {
        question: "What is the final step in digitizing audio?",
        answers: ["Sampling", "Quantization", "Encoding", "Synthesizing"],
        correct: 2
    },
    {
        question: "Which factor does not directly affect audio file size?",
        answers: ["Sampling rate", "Bit depth", "Number of channels", "File name"],
        correct: 3
    },
    {
        question: "What does lossy compression do to audio data?",
        answers: ["Increases quality", "Removes some data permanently", "Duplicates the file", "Adds metadata"],
        correct: 1
    },
    {
        question: "Which of the following is not a lossless format?",
        answers: ["FLAC", "ALAC", "MP3", "WAV"],
        correct: 2
    },
    {
        question: "What is MIDI primarily used for?",
        answers: ["Recording voice", "Controlling musical instruments", "Editing video", "Storing raw audio"],
        correct: 1
    },
    {
        question: "Which statement best describes MIDI files?",
        answers: ["They store real sound", "They contain video and audio", "They store musical instructions, not sound", "They are compressed audio files"],
        correct: 2
    },
    {
        question: "Which disk is involved in editing digital audio?",
        answers: ["Streaming", "Trimming", "Broadcasting", "Mixing live"],
        correct: 1
    },
    {
        question: "What does equalization do in audio editing?",
        answers: ["Increases volume", "Adjusts frequency content", "Reverses sound", "Adds silence"],
        correct: 1
    },
    {
        question: "What does down sampling mean?",
        answers: ["Increasing file size", "Saving file as MIDI", "Reducing the sample rate", "Adding more channels"],
        correct: 2
    },
    {
        question: "What does reversing a sound file do?",
        answers: ["Plays the sound backward", "Increases pitch", "Removes noise", "Compresses the file"],
        correct: 0
    },
    {
        question: "What is time stretching used for?",
        answers: ["Compressing audio", "Changing bit depth", "Changing audio length without changing pitch", "Increasing frequency"],
        correct: 2
    },
    {
        question: "What does digital signal processing (DSP) allow in audio editing?",
        answers: ["Add effects like echo and reverb", "Convert to stereo", "Rename files", "Compress file format"],
        correct: 0
    },
    {
        question: "Which file format stores musical instructions rather than actual sound?",
        answers: ["WAV", "MIDI", "MP3", "FLAC"],
        correct: 1
    },
    {
        question: "What does format conversion allow in audio editing?",
        answers: ["Replaces text", "Changes file type to suit applications", "Reduces sound quality", "Adds transitions"],
        correct: 1
    },
    {
        question: "Which is not a common audio editing task?",
        answers: ["Trimming", "Splicing", "Volume adjustment", "Browsing the web"],
        correct: 3
    },
    {
        question: "Which of the following is a common feature of digital audio editing software?",
        answers: ["Weather prediction", "Resampling", "Image rendering", "Web scraping"],
        correct: 1
    },
    {
        question: "What is the main advantage of MIDI over digital audio?",
        answers: ["Smaller file size", "Better sound quality", "Contains video", "Doesn't need instruments"],
        correct: 0
    },
    {
        question: "What is compression mainly used for in audio and video?",
        answers: ["Increase file size", "Add watermark", "Reduce file size", "Change bit depth"],
        correct: 2
    },
    {
        question: "What technique is used to remove spatial redundancy in video?",
        answers: ["Discrete Cosine Transform (DCT)", "MIDI", "Reversing", "Equalization"],
        correct: 0
    },
    {
        question: "What technique is used to remove temporal redundancy in video?",
        answers: ["Zigzag scanning", "Motion compensation (MC)", "MIDI conversion", "Audio filtering"],
        correct: 1
    },
    {
        question: "What is used at the final stage of video compression to reduce repeated values?",
        answers: ["Amplifier", "MIDI", "Run-Length Encoding (RLE)", "Volume control"],
        correct: 2
    },
    {
        question: "Speech recognition is the process of machines understanding spoken language.",
        answers: ["True", "False"],
        correct: 0
    },
    {
        question: "What is the key to delivering an effective business presentation?",
        answers: ["Reading from slides", "Using only text", "Structuring content and knowing your audience", "Speaking quickly"],
        correct: 2
    },
    {
        question: "What tool provides a zoomable canvas for presentations?",
        answers: ["PowerPoint", "Prezi", "Word", "Excel"],
        correct: 1
    },
    {
        question: "What type of digital story focuses on sharing company history and mission?",
        answers: ["Brand story", "Customer story", "Employee story", "Blog post"],
        correct: 0
    },
    {
        question: "Which of the following tools is mainly used for creating interactive PDFs?",
        answers: ["Canva", "Adobe Acrobat", "PowerPoint", "Prezi"],
        correct: 1
    },
    {
        question: "What is one benefit of using multimedia in reports?",
        answers: ["Makes them longer", "Reduces information", "Makes them more engaging and easier to understand", "Converts them to video"],
        correct: 2
    },
    {
        question: "Which presentation tool is best for business meetings and training sessions?",
        answers: ["Microsoft PowerPoint", "Canva", "TikTok", "Blender"],
        correct: 0
    },
    {
        question: "Which platform is often used for short, creative digital storytelling videos?",
        answers: ["Word", "Excel", "Instagram", "Acrobat"],
        correct: 2
    },
    {
        question: "What type of multimedia can help explain complex financial data?",
        answers: ["Animation", "Infographic", "Voiceover", "Background music"],
        correct: 1
    },
    {
        question: "What does a professional website help build?",
        answers: ["Cost", "Risk", "Credibility and trust", "Speed"],
        correct: 2
    },
    {
        question: "What is SEO mainly used for?",
        answers: ["Designing websites", "Improving search engine ranking", "Sending emails", "Editing photos"],
        correct: 1
    },


// True/False questions نحاس 
////
///////////////////////////////////////////////////
{
    question: "Image filtering can help reduce noise in an image.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "A median filter is best suited for removing Gaussian noise.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "High-pass filters are used to sharpen images by enhancing edges.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Zero padding adds black pixels around the image to preserve size during filtering.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Histogram equalization decreases the contrast of an image.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Spatial filtering operates on the frequency components of the image.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A low-pass filter removes high-frequency components such as noise and edges.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "The Sobel filter is used for edge detection in specific directions.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Gaussian noise appears as random black and white dots.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Convolution in image processing refers to multiplying two images.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "The Laplacian filter uses second derivatives to detect edges.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Weighted averaging filters give more importance to central pixels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Median filters are linear filters.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "High-pass filters remove low-frequency components.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "The output size of an image after convolution is always smaller unless padding is used.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "A max filter keeps the darkest pixel value in the filter window.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A min filter keeps the darkest pixel value in the filter window.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Band-pass filters keep only medium-frequency components.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Spatial filters do not affect image brightness.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Image enhancement always results in larger file size.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Sound is a digital wave that travels through space.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Sampling is the process of taking measurements of sound at regular intervals.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "A higher sampling rate generally leads to better sound quality.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Quantization converts sound into electrical signals.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "8-bit quantization gives more accuracy than 16-bit quantization.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Mono sound uses two separate channels.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Audio quality is affected by sample rate, bit depth, and number of channels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Companding is used to reduce quantization error.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Encoding converts numbers into binary form.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Stereo sound has a single audio channel.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A well-structured presentation should include an introduction, main body, and conclusion.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Prezi is a tool that allows you to create traditional linear slide shows only.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Digital storytelling is only used in education, not in business.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A website available 24/7 increases accessibility for customers.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "SEO helps a website rank higher in search engine results.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Augmented Reality replaces the physical world with a digital one.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "A good business website can help generate sales leads.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Using visuals in a presentation can distract the audience.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "VR is used in business only for gaming applications.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Employee stories can help humanize a brand.",
    answers: ["True", "False"],
    correct: 0
},]/*
// true and false hamed 
///////////////////////////////////////////
///////////////////////////////////////////
{
    question: "Run Length Encoding is a lossy method.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "JPEG is a lossless format.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Entropy measures the information content in a source.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "The human eye can detect all changes in image data.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Quantization reduces image precision.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Pattern substitution removes all pixels.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Compression is not needed in business applications.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Coding redundancy occurs when symbols use longer codes than necessary.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "DCT is used in JPEG compression.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Spatial redundancy is based on repetition in neighboring pixels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Simple repetition suppression enhances detail in images.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Compression helps save bandwidth.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Irrelevant information is fully required for reconstruction.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Huffman coding uses equal-length codes for all characters.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Video sequences contain temporal redundancy.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "MIDI files are usually larger than digital audio files.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Lossless compression permanently removes audio data.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Audio editing cannot change the volume of a track.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "MP3 is an example of a lossy audio format.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Trimming in editing means cutting out unwanted parts.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Downsampling increases the quality of audio.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Digital Signal Processing (DSP) can add special effects.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Time stretching affects the pitch of the audio.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Equalization makes audio louder.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "MIDI files are not audio recordings but digital instructions.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Reversing audio can create surreal effects.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "DCT is used for removing redundancy in audio files.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Motion compensation reduces temporal redundancy in video.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "RLE is used to compress repeated values like zeros.",
    answers: ["True", "False"],
    correct: 0
},
 {
    question: "A well-structured presentation should include an introduction, main body, and conclusion.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Prezi is a tool that allows you to create traditional linear slide shows only.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "Digital storytelling is only used in education, not in business.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "A website available 24/7 increases accessibility for customers.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "SEO helps a website rank higher in search engine results.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Augmented Reality replaces the physical world with a digital one.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "A good business website can help generate sales leads.",
    answers: ["True", "False"],
    correct: 0
  },
  {
    question: "Using visuals in a presentation can distract the audience.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "VR is used in business only for gaming applications.",
    answers: ["True", "False"],
    correct: 1
  },
  {
    question: "Employee stories can help humanize a brand.",
    answers: ["True", "False"],
    correct: 0
  },/*
  // Lecture 1: Image Enhancement Techniques hammed
  //////////////////////////////////////////////////////////////////////////////////////////////
{
    question: "What is the primary purpose of low-pass filters in image processing?",
    answers: ["Detecting edges", "Removing noise", "Enhancing contrast", "Color correction"],
    correct: 1
},
{
    question: "Which technique replaces the center pixel with the median of its Neighborhood?",
    answers: ["Averaging filter", "Weighted filter", "Median filter", "Gaussian filter"],
    correct: 2
},
{
    question: "Convolution is typically used in:",
    answers: ["Image segmentation", "Spatial filtering", "Image compression", "Color balancing"],
    correct: 1
},
{
    question: "Zero padding is used to:",
    answers: ["Reduce noise", "Increase contrast", "Preserve image size after filtering", "Convert color to gray"],
    correct: 2
},
{
    question: "High-pass filters are best for:",
    answers: ["Color correction", "Smoothing", "Sharpening", "Resizing"],
    correct: 2
},
{
    question: "Which filter is most effective against salt and pepper noise?",
    answers: ["Median filter", "High-pass filter", "Low-pass filter", "Gaussian filter"],
    correct: 0
},
{
    question: "Frequency domain filtering is based on:",
    answers: ["Pixel intensity", "Histogram equalization", "Frequency component of the image", "Image color"],
    correct: 2
},
{
    question: "Which of the following is NOT a use of high-pass filtering?",
    answers: ["Edge detection", "Motion detection", "Blurring", "Medical imaging"],
    correct: 2
},
{
    question: "A mask in spatial filtering is:",
    answers: ["A color filter", "A histogram", "A small matrix used in convolution", "A watermark"],
    correct: 2
},
{
    question: "Weighted averaging filters differ from normal averaging filters by:",
    answers: ["Being non-linear", "Giving different weights to pixels", "Working in the frequency domain", "Ignoring edge pixels"],
    correct: 1
},
{
    question: "Spatial filtering involves which of the following?",
    answers: ["Frequency adjustment", "Applying operations to pixel neighbourhoods", "Color shifting", "Bit-level manipulation"],
    correct: 1
},
{
    question: "What is the effect of convolution in image filtering?",
    answers: ["Removes image", "Blurs image randomly", "Creates a new pixel value", "Crops Image"],
    correct: 2
},
{
    question: "The primary benefit of smoothing is to:",
    answers: ["Improve edge sharpness", "Add noise", "Reduce irrelevant details", "Highlight texture"],
    correct: 2
},
{
    question: "Which filter keeps moderate frequencies only?",
    answers: ["Low-pass", "High-pass", "Band-pass", "Edge"],
    correct: 2
},
{
    question: "Median filtering is best described as:",
    answers: ["Linear", "Frequency-based", "Histogram-based", "Non-linear"],
    correct: 3
},
{
    question: "In edge detection, high-pass filters help in:",
    answers: ["Hiding object boundaries", "Enhancing sharp transitions", "Equalizing contrast", "Merging images"],
    correct: 1
},
{
    question: "Convolution typically involves:",
    answers: ["Histogram computation", "Matrix addition", "Mask operation", "Color channel rotation"],
    correct: 2
},
{
    question: "A major difference between spatial and frequency filtering is:",
    answers: ["Use of colors", "Image size", "Domain of operation", "Image file format"],
    correct: 2
},
{
    question: "Zero padding adds:",
    answers: ["Random noise", "High contrast", "Rows and columns of zeros", "RGB values"],
    correct: 2
},
{
    question: "Edge detection helps in:",
    answers: ["Reducing noise", "Segmenting images", "Compressing files", "Adding color"],
    correct: 1
},

// Lecture 2: Data Compression
{
    question: "What is the purpose of data compression?",
    answers: ["Increase resolution", "Reduce storage/transmission cost", "Enhance colors", "Encrypt data"],
    correct: 1
},
{
    question: "Which of the following is an image compression format?",
    answers: ["MP3", "GIF", "DOC", "AVI"],
    correct: 1
},
{
    question: "Lossless compression means:",
    answers: ["Loss of image data", "Full recovery of original data", "High noise", "Only for audio"],
    correct: 1
},
{
    question: "JPEG is an example of:",
    answers: ["Lossless compression", "Lossy compression", "No compression", "Secure format"],
    correct: 1
},
{
    question: "MP3 is used for compressing:",
    answers: ["Images", "Videos", "Audio", "Text"],
    correct: 2
},
{
    question: "MPEG is related to:",
    answers: ["Audio", "Video", "Image", "Spreadsheet"],
    correct: 1
},
{
    question: "Which step comes first in compression model?",
    answers: ["Post-processing", "Pre-processing", "Encoding", "Decoding"],
    correct: 1
},
{
    question: "Temporal redundancy exists in:",
    answers: ["Images", "Video sequences", "Audio", "Documents"],
    correct: 1
},
{
    question: "Entropy is used to measure:",
    answers: ["Size", "Noise", "Average information per pixel", "Bit depth"],
    correct: 2
},
{
    question: "A high entropy value means:",
    answers: ["Compressible", "No Information", "High information content", "Noisy file"],
    correct: 2
},
{
    question: "GIF compression is:",
    answers: ["Lossy", "Lossless", "Hybrid", "Uncompressed"],
    correct: 1
},
{
    question: "Compression ratio compares:",
    answers: ["Quality vs Size", "Compressed vs Encrypted", "Uncompressed vs Compressed", "Input vs Output bits"],
    correct: 2
},
{
    question: "Which compression type keeps file size small but loses quality?",
    answers: ["Lossless", "Lossy", "None", "Balanced"],
    correct: 1
},
{
    question: "Human Visual System ignores:",
    answers: ["Temporal data", "Irrelevant Information", "Spatial patterns", "Entropy"],
    correct: 1
},
{
    question: "Which one is not a redundancy type?",
    answers: ["Spatial", "Temporal", "Coding", "Color"],
    correct: 3
},
{
    question: "Post-processing is used for:",
    answers: ["Image rotation", "Color balancing", "Removing compression artifacts", "Increasing size"],
    correct: 2
},
{
    question: "High compression ratio means:",
    answers: ["Poor quality", "Large file", "Better compression", "Low entropy"],
    correct: 2
},
{
    question: "A compression ratio of 1 means:",
    answers: ["No compression", "Lossless", "High speed", "Full redundancy"],
    correct: 0
},
{
    question: "Spatial redundancy is caused by:",
    answers: ["Similar adjacent pixels", "Loud sounds", "Fast frames", "File type"],
    correct: 0
},
{
    question: "Redundancy is helpful because it:",
    answers: ["Wastes space", "Can be removed to compress", "Degrades image", "Enhances brightness"],
    correct: 1
},
{
    question: "An image is 65536 bytes and compressed to 6554 bytes. Find compression:",
    answers: ["8", "10", "5", "12"],
    correct: 1
},
{
    question: "If CR = 10, what is RD?",
    answers: ["0.1", "0.5", "0.9", "1.0"],
    correct: 2
},
{
    question: "CR = 8, then RD = ?",
    answers: ["0.75", "0.5", "0.9", "0.25"],
    correct: 0
},
{
    question: "Original size = 100 KB, compressed size = 20 KB. CR = ?",
    answers: ["4", "5", "2", "6"],
    correct: 1
},
{
    question: "If L = 8 and all probabilities = 1/8, Entropy H = ?",
    answers: ["2", "3", "1", "4"],
    correct: 1
},
{
    question: "If L = 4 and all p = 1/4, entropy = ?",
    answers: ["1", "3", "2", "4"],
    correct: 2
},
{
    question: "If CR = 4, RD = ?",
    answers: ["0.5", "0.75", "0.8", "0.6"],
    correct: 1
},
{
    question: "CR = 1 means:",
    answers: ["No compression", "100% redundancy", "Infinite compression", "Image is encrypted"],
    correct: 0
},
{
    question: "How to compute log2(x) using log10(x)?",
    answers: ["Multiply by 3.32", "Multiply by 0.33", "Divide by 2", "Use In(x)"],
    correct: 0
},
{
    question: "Entropy formula includes:",
    answers: ["+ sign", "summation of pixel values", "log base 10", "negative summation of P(i) log2(Pi)"],
    correct: 3
},

// Lecture 3: Compression Algorithms
{
    question: "What type of compression is Run Length Encoding?",
    answers: ["Lossy", "Lossless", "Hybrid", "Encrypted"],
    correct: 1
},
{
    question: "RLE works best with:",
    answers: ["Noisy Images", "Text files", "Graphics with repeated patterns", "Audio"],
    correct: 2
},
{
    question: "JPEG compression is mainly:",
    answers: ["Lossless", "Lossy", "Uncompressed", "Reversible"],
    correct: 1
},
{
    question: "Which of the following is NOT used in JPEG compression?",
    answers: ["DCT", "RLE", "Quantization", "Arithmetic coding"],
    correct: 3
},
{
    question: "RLE may fail when:",
    answers: ["There are lots of repeated values", "There's high image resolution", "There's no repetition", "It's combined with JPEG"],
    correct: 2
},
{
    question: "In RLE, which is correct for the sequence 33, 37?",
    answers: ["(3,4)", "(4,3)", "(3,3)", "43"],
    correct: 1
},
{
    question: "A limitation of simple repetition suppression is:",
    answers: ["Complexity", "Requires decoding", "Poor compression ratio", "Needs audio"],
    correct: 2
},
{
    question: "Pattern substitution replaces:",
    answers: ["All spaces with slashes", "Rare patterns", "Frequent patterns", "Binary codes"],
    correct: 2
},
{
    question: "Replacing 'and' with '&' is an example of:",
    answers: ["Lossless compression", "RLE", "Pattern substitution", "Encoding"],
    correct: 2
},
{
    question: "What type of flag is needed in repetition suppression?",
    answers: ["Noise", "Repeat indicator", "Filter", "Keyframe"],
    correct: 1
},
{
    question: "Which is a disadvantage of RLE?",
    answers: ["Complex algorithm", "Works only for video", "May increase file size", "Requires cloud processing"],
    correct: 2
},
{
    question: "RLE is included in JPEG as:",
    answers: ["The only stage", "A lossless replacement", "One of multiple stages", "Used in decryption"],
    correct: 2
},
{
    question: "Pattern substitution is based on:",
    answers: ["Machine learning", "Statistics", "Hardware", "Sampling"],
    correct: 1
},
{
    question: "RLE is commonly used for:",
    answers: ["Videos", "Graphics", "Sound files", "Databases"],
    correct: 1
},
{
    question: "JPEG stands for:",
    answers: ["Joint Photo Experts Graphics", "Java Picture Encoding Group", "Joint Photographic Experts Group", "JPEG is not an acronym"],
    correct: 2
},
{
    question: "Huffman coding is used in:",
    answers: ["PNG", "JPEG", "GIF", "DOC"],
    correct: 1
},
{
    question: "Quantization in JPEG helps with:",
    answers: ["Edge detection", "Color saturation", "Data reduction", "Resolution scaling"],
    correct: 2
},
{
    question: "DCT transforms image data into:",
    answers: ["Binary", "Frequency components", "Colors", "Audio"],
    correct: 1
},
{
    question: "One advantage of pattern substitution is:",
    answers: ["Increases detail", "Less memory used", "Maintains raw format", "Requires encryption"],
    correct: 1
},
{
    question: "Lossless compression means:",
    answers: ["File size is always smaller", "Some data is discarded", "All original data is preserved", "Works only with audio"],
    correct: 2
},

// Lecture 4: Image Restoration
{
    question: "Image restoration aims to:",
    answers: ["Compress image", "Improve color", "Recover original image", "Convert format"],
    correct: 2
},
{
    question: "The noise model is represented as:",
    answers: ["f(x,y)+g(x,y)=n(x,y)", "g(x,y)=f(x,y)+n(x,y)", "f(x,y)=n(x,y)+g(x,y)", "None"],
    correct: 1
},
{
    question: "Gaussian noise appears as:",
    answers: ["Colored bands", "Grainy blur", "Sharp dots", "Horizontal lines"],
    correct: 1
},
{
    question: "Salt-and-pepper noise appears as:",
    answers: ["Color smearing", "White and black dots", "Diagonal stripes", "Color shift"],
    correct: 1
},
{
    question: "Speckle noise is common in:",
    answers: ["Nature photography", "Medical images", "Night shots", "Street photography"],
    correct: 1
},
{
    question: "Best filter for salt-and-pepper noise:",
    answers: ["Average", "Gaussian", "Median", "Laplacian"],
    correct: 2
},
{
    question: "Source of Poisson noise:",
    answers: ["Bit-depth", "Photon variability", "Signal delay", "Filter error"],
    correct: 1
},
{
    question: "Periodic noise is caused by:",
    answers: ["Bit mismatch", "Voltage drop", "Electrical interference", "ISO setting"],
    correct: 2
},
{
    question: "Fourier Transform is used to remove:",
    answers: ["Salt noise", "Pepper noise", "Periodic noise", "Poisson noise"],
    correct: 2
},
{
    question: "Quantization noise results from:",
    answers: ["Sensor heating", "Light scatter", "Reducing color depth", "Sharpening"],
    correct: 2
},
{
    question: "Median filter is best for:",
    answers: ["Speckle", "Gaussian", "Salt and pepper", "Quantization"],
    correct: 2
},
{
    question: "Gaussian filter is used to reduce:",
    answers: ["Lines", "Impulses", "Gaussian noise", "Banding"],
    correct: 2
},
{
    question: "Impulse noise includes:",
    answers: ["Periodic", "Quantization", "Salt & Pepper", "All"],
    correct: 2
},
{
    question: "Salt noise =",
    answers: ["Black dots", "Random stripes", "White dots", "Light leak"],
    correct: 2
},
{
    question: "Pepper noise =",
    answers: ["Red lines", "Dark dots", "Vertical stripes", "Color blur"],
    correct: 1
},
{
    question: "Solution to speckle noise:",
    answers: ["Gaussian filter", "Median filter", "Adaptive filters", "Histogram equalization"],
    correct: 2
},
{
    question: "AWGN stands for:",
    answers: ["Adaptive white Gaussian noise", "Additive white Gaussian noise", "Average weighted graphic noise", "Amplified wave group noise"],
    correct: 1
},
{
    question: "Which noise follows a normal distribution?",
    answers: ["Poisson", "Speckle", "Gaussian", "Quantization"],
    correct: 2
},
{
    question: "Dithering is used to reduce:",
    answers: ["Color shift", "Bit-depth loss", "Sharpness", "Brightness"],
    correct: 1
},
{
    question: "Which noise is most frequent in low-light?",
    answers: ["Poisson", "Salt", "Quantization", "Periodic"],
    correct: 0
},

// Audio Lectures
{
    question: "One of the main reasons to use audio in multimedia is to:",
    answers: ["Increase color depth", "Replace text entirely", "Clarify meaning when visuals are insufficient", "Decrease file size"],
    correct: 2
},
{
    question: "Audio supports learners who:",
    answers: ["Prefer diagrams", "Understand only text", "Learn better by listening", "Don't use visuals"],
    correct: 2
},
{
    question: "In multimedia, audio is considered:",
    answers: ["Optional", "The least used element", "The most important element for engagement", "Replaced by images"],
    correct: 2
},
{
    question: "Audio is a better communication speed because it is:",
    answers: ["Delayed and processed", "Less natural", "More direct and human-like", "More technical"],
    correct: 2
},
{
    question: "Audio helps learn from the content of the image.",
    answers: ["Removing redundancy", "Enhancing text search", "Creating motion graphics", "Supporting different learning styles"],
    correct: 3
},
{
    question: "Analog sound is:",
    answers: ["Binary-coded", "A sequence of 0s and 1s", "A continuous pressure wave", "Measured in pixels"],
    correct: 2
},
{
    question: "Audio refers to:",
    answers: ["Live speech", "Sound before recording", "Digitized sound used by computers", "Non-electronic wave"],
    correct: 2
},
{
    question: "The difference between sound and audio is that:",
    answers: ["Audio is analog, sound is digital", "Sound is recorded, audio is spoken", "Sound is analog, audio is digital", "There is no difference"],
    correct: 2
},
{
    question: "Computers can only work with:",
    answers: ["Analog sound", "Audio signals", "Voltage levels", "Wave frequencies"],
    correct: 1
},
{
    question: "Sampling means:",
    answers: ["Replacing values with 0s", "Measuring sound at equal time intervals", "Reducing sound pitch", "Mixing sound sources"],
    correct: 1
},
{
    question: "Quantization is:",
    answers: ["Removing background noise", "Measuring volume in decibels", "Converting amplitudes to integers", "Analyzing sound quality"],
    correct: 2
},
{
    question: "Bit depth refers to:",
    answers: ["The number of bits used for each second", "The number of levels used to represent amplitude", "The frequency of sound", "The size of the file"],
    correct: 1
},
{
    question: "Higher bit depths results in:",
    answers: ["Larger image size", "Lower audio accuracy", "Better amplitude precision", "Lower resolution"],
    correct: 2
},
{
    question: "If bit depth = 8 bits, number of levels = ?",
    answers: ["64", "128", "256", "512"],
    correct: 2
},
{
    question: "Encoding refers to:",
    answers: ["Making audio louder", "Storing sampled values in analog form", "Converting digitized data into binary", "Compressing audio"],
    correct: 2
},
{
    question: "Mono audio uses:",
    answers: ["Two channels", "Four speakers", "One channel", "No speakers"],
    correct: 2
},
{
    question: "Stereo audio provides:",
    answers: ["360° sound", "Left and right channel separation", "Only background noise", "Single-point source"],
    correct: 1
},
{
    question: "Surround sound involves:",
    answers: ["Single-channel input", "2 channels", "4–7 channels", "No channel separation"],
    correct: 2
},
{
    question: "Which of the following affects audio file size?",
    answers: ["Pixel size", "Audio format", "Sample rate, bit depth, and duration", "Number of images"],
    correct: 2
},
{
    question: "Formula for stereo audio file size:",
    answers: ["Sample rate × Bit depth × Time", "Sample rate × Bit depth × Time × 2", "Sample rate × Time × Channels", "None"],
    correct: 1
},
{
    question: "File with 44.1 kHz, 16-bit, stereo, 60 sec = ? (Bitrate)",
    answers: ["44,100", "88,200", "1,411,200", "705,600"],
    correct: 2
},
{
    question: "The data rate (bitrate) of CD audio is:",
    answers: ["176.4 Kbps", "88.2 Kbps", "1.4 Mbps", "192 Kbps"],
    correct: 2
},
{
    question: "Audio quality increases with:",
    answers: ["Lower sample rate", "Lower bit depth", "Higher sample rate and bit depth", "Mono recording"],
    correct: 2
},
{
    question: "CD-quality audio has:",
    answers: ["22 kHz, 8-bit", "44.1 kHz, 16-bit", "48 kHz, 8-bit", "11 kHz, 16-bit"],
    correct: 1
},
{
    question: "Telephone audio typically uses:",
    answers: ["22 kHz, stereo", "8 kHz, mono", "44.1 kHz, stereo", "192 kHz, 24-bit"],
    correct: 1
},
{
    question: "Which of the following is NOT lossless?",
    answers: ["WAV", "AIFF", "MP3", "FLAC"],
    correct: 2
},
{
    question: "MIDI files store:",
    answers: ["Recorded voices", "Binary audio", "Music instructions", "Environmental sounds"],
    correct: 2
},
{
    question: "Lossy compression:",
    answers: ["Keeps all data", "Reduces file size by removing inaudible data", "Is used for images only", "Cannot be used online"],
    correct: 1
},
{
    question: "Downloaded audio:",
    answers: ["Requires internet always", "Is stored permanently", "Cannot be paused", "Is uncompressed"],
    correct: 1
},
{
    question: "Live streaming means:",
    answers: ["File is saved to device", "Requires no internet", "Can't be paused or rewinded", "Compressed automatically"],
    correct: 2
},

// Video Lectures
{
    question: "A video is composed of:",
    answers: ["Continuous audio", "Still images in random order", "A time-ordered sequence of frames", "Live feed only"],
    correct: 2
},
{
    question: "The standard frame rates used in video are:",
    answers: ["10, 12, 14", "15, 25, 30", "20, 28, 35", "5, 15, 60"],
    correct: 1
},
{
    question: "Aspect ratio refers to:",
    answers: ["Brightness level", "Width-to-height ratio", "Sound pitch", "Frame rate"],
    correct: 1
},
{
    question: "A 16:9 aspect ratio is:",
    answers: ["Taller than wide", "Square", "Wide-screen format", "Printing format"],
    correct: 2
},
{
    question: "What is raw video?",
    answers: ["Processed video with effects", "Video from internet", "Unprocessed camera data", "Black-and-white video"],
    correct: 2
},
{
    question: "RGB model uses which colors?",
    answers: ["Red, Blue, Yellow", "Cyan, Magenta, Yellow", "Red, Green, Blue", "Black, White, Red"],
    correct: 2
},
{
    question: "The color model used in TV signals is:",
    answers: ["CMYK", "YUV", "RGB", "HSL"],
    correct: 1
},
{
    question: "The component 'Y' in YUV stands for:",
    answers: ["Yellow", "Luminance (brightness)", "Y-axis", "Contrast"],
    correct: 1
},
{
    question: "HSL model represents:",
    answers: ["Hue, Speed, Length", "Height, Sound, Length", "Hue, Saturation, Lightness", "Highlight, Shadow, Light"],
    correct: 2
},
{
    question: "Bitrate of HDTV is approximately:",
    answers: ["720 Mbps", "1.39 Gbps", "5 Mbps", "2.4 Mbps"],
    correct: 1
},
{
    question: "Why compress video?",
    answers: ["Add more effects", "Reduce clarity", "Reduce file size", "Increase FPS"],
    correct: 2
},
{
    question: "Spatial redundancy is:",
    answers: ["Noise between speakers", "Repetition between frames", "Similarity between nearby pixels", "Data loss"],
    correct: 2
},
{
    question: "Temporal redundancy is found in:",
    answers: ["Text", "Color filters", "Differences between frames", "RGB values"],
    correct: 2
},
{
    question: "DCT is used to:",
    answers: ["Add sound", "Convert video to black and white", "Remove spatial redundancy", "Compress audio"],
    correct: 2
},
{
    question: "Motion Compensation is used to:",
    answers: ["Increase resolution", "Add motion blur", "Reduce frame difference storage", "Encode audio"],
    correct: 2
},
{
    question: "First step in video compression is:",
    answers: ["DCT", "Frame difference", "RGB to YUV", "Histogram equalization"],
    correct: 2
},
{
    question: "RLE is useful for:",
    answers: ["Color correction", "Encoding sequences of zeros", "Audio remixing", "Enhancing resolution"],
    correct: 1
},
{
    question: "Zigzag scanning is used before:",
    answers: ["Sampling", "DCT", "RLE", "Audio compression"],
    correct: 2
},
{
    question: "Compression within frame is called:",
    answers: ["Inter-frame", "Intra-frame", "Bit-mapped", "Parallel coding"],
    correct: 1
},
{
    question: "Motion Compensation stores:",
    answers: ["All pixels per frame", "Complete audio per frame", "Only differences between frames", "Brightness levels only"],
    correct: 2
},

// Business Presentations
{
    question: "What is the purpose of structuring a presentation into intro, body, and conclusion?",
    answers: ["Add animations", "Fill slides", "Organize message clearly", "Save time"],
    correct: 2
},
{
    question: "The Problem-Solution-Benefit model is best for:",
    answers: ["Storytelling", "Persuasive presentations", "Technical reports", "Infographics"],
    correct: 1
},
{
    question: "Which tool is best for interactive, non-linear presentations?",
    answers: ["Word", "Excel", "PowerPoint", "Prezi"],
    correct: 3
},
{
    question: "Which of the following improves audience memory?",
    answers: ["Long paragraphs", "Detailed tables", "Visuals", "Monotone delivery"],
    correct: 2
},
{
    question: "Practicing your delivery helps you:",
    answers: ["Memorize text", "Avoid using visuals", "Gain confidence", "Change content"],
    correct: 2
},
{
    question: "What does SEO help with?",
    answers: ["Slide design", "Presentation rehearsals", "Higher ranking on search engines", "Better animations"],
    correct: 2
},
{
    question: "A voiceover in a proposal is an example of:",
    answers: ["Audio", "Text", "Image", "Chart"],
    correct: 0
},
{
    question: "Which platform is ideal for publishing business digital stories?",
    answers: ["PowerPoint", "Word", "Instagram", "Excel"],
    correct: 2
},
{
    question: "Adobe Acrobat is used to:",
    answers: ["Write code", "Create interactive PDFs", "Record audio", "Host websites"],
    correct: 1
},
{
    question: "Canva helps in:",
    answers: ["Making financial reports", "Designing beautiful proposals", "Data modeling", "Backend coding"],
    correct: 1
},
{
    question: "VR fully replaces the physical environment.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "AR is better than VR for try-ons because:",
    answers: ["It adds digital to real world", "It's cheaper", "It uses black & white", "It works offline only"],
    correct: 0
},
{
    question: "A professional website builds:",
    answers: ["Price", "Credibility", "Speed", "VR content"],
    correct: 1
},
{
    question: "Digital storytelling improves:",
    answers: ["HR policies", "Technical specs", "Engagement", "Server speed"],
    correct: 2
},
{
    question: "Social media is best used for:",
    answers: ["Testing audio", "Sending emails", "Sharing digital stories", "Writing contracts"],
    correct: 2
},
{
    question: "What is the first essential step in creating an impactful business presentation?",
    answers: ["Add animation", "Use humor", "Understand your audience", "Insert charts randomly"],
    correct: 2
},
{
    question: "What is the purpose of the Problem–Solution–Benefit framework?",
    answers: ["To present financial charts", "To add creative transitions", "To make the presentation persuasive", "To show all employee data"],
    correct: 2
},
{
    question: "Which tool is best for creating interactive PDF reports?",
    answers: ["Canva", "PowerPoint", "Word", "Adobe Acrobat"],
    correct: 3
},
{
    question: "Digital storytelling in business is primarily used for:",
    answers: ["Hardware testing", "Document archiving", "Branding and communication", "Password encryption"],
    correct: 2
},
{
    question: "Which platform is known for its zoomable canvas and storytelling design?",
    answers: ["Excel", "Canva", "PowerPoint", "Prezi"],
    correct: 3
},
{
    question: "Which of the following is a use case for customer digital stories?",
    answers: ["Explaining AR technology", "Describing employee salaries", "Sharing how a service helped a client", "Showing competitor reports"],
    correct: 2
},
{
    question: "What type of content does Augmented Reality (AR) overlay on the real world?",
    answers: ["Documents", "Handwritten notes", "Digital content (images, 3D models, etc.)", "Live sound"],
    correct: 2
},
{
    question: "Which digital storytelling tool is used for editing and producing videos?",
    answers: ["Blender", "Excel", "Adobe Premiere Pro", "Prezi"],
    correct: 2
},
{
    question: "What is one key benefit of using multimedia in reports?",
    answers: ["Makes them longer", "Confuses the reader", "Increases engagement and clarity", "Requires less effort"],
    correct: 2
},
//true  false hammed
{
    question: "Low-pass filters are used for edge detection.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Median filters are non-linear and good for removing impulse noise.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "High-pass filters amplify high-frequency details like edges.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Convolution reduces the size of the image significantly.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Band-pass filters retain both very low and very high frequencies.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Frequency domain filtering works on pixel values directly.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Smoothing filters are helpful in pre-processing to remove fine details.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Zero padding helps to maintain output size in convolution.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Spatial filtering requires Fourier transforms.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "High-pass filtering is useful in medical imaging and motion detection.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Lossy compression removes some image data.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Entropy measures the color of an image.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "MP3 is used for image compression.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "JPEG is a lossy compression format.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Compression ratio = compressed / uncompressed size.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Coding redundancy means using more bits than necessary.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Higher entropy = more information per pixel.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Post-processing is done before encoding.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "RD = 1 - (1 / compression ratio).",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "In lossless compression, the image can be perfectly restored.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "RLE is a lossy algorithm.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "JPEG compression includes both lossless and lossy stages.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Pattern substitution only works with numbers.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "RLE may fail if the data has no repetition.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Simple repetition suppression needs a special marker.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "JPEG uses DCT, quantization, Huffman coding, and RLE.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "RLE is good for compressing human speech.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Pattern substitution works by replacing rare symbols.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Using & instead of 'and' is pattern substation",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "compression efficency = compression ratio",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Image restoration is about enhancing colors.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Gaussian noise appears as smooth variation.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Salt-and-pepper noise is solved by Gaussian filter.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Median filter is best for impulse noise.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Fourier transform is used in frequency domain filtering.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Speckle noise is mostly in audio files.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Poisson noise is due to light variation.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Dithering can fix banding caused by quantization.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Periodic noise appears randomly.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "AWGN affects pixels with random values.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Sampling rate refers to how many times per second audio is measured.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "16-bit audio allows 65,536 possible amplitude levels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Mono audio uses two channels.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Audio cannot be compressed.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "MP3 is a lossy compression format.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "MIDI files contain actual audio recordings.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Encoding is converting samples into binary.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Bit depth has no effect on audio quality.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Streaming audio can be rewinded anytime.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Surround sound systems use more than two channels.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Analog sound is a continuous waveform that varies with time.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Higher sample rate and bit depth result in higher audio quality.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "The audio file size is independent of duration.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "WAV files are uncompressed and large in size.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Lossless compression removes parts of the audio to reduce size.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Video is a continuous stream of light.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Frame rate affects how smooth a video appears.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "RGB is used mainly in printing.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "YUV separates brightness from color.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "CMYK is the color model used in photosensors.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "16:9 is a common widescreen format.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Bitrate measures how much data is needed per second.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Spatial redundancy compares between different frames.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Temporal redundancy compares between frames over time.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Zigzag scanning helps optimize RLE compression.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "DCT is used in video compression to remove spatial redundancy.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Intra-frame compression compares differences across multiple frames.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "YUV is more suitable for compression than RGB because it separates brightness.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Motion compensation helps reduce temporal redundancy.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Zigzag scanning randomizes pixel positions.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "PowerPoint offers animation and transition effects.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Prezi uses a zoomable canvas, ideal for storytelling.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Multimedia should be avoided in serious reports.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "AR replaces the real world with digital.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "VR is used for employee training.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Digital storytelling only applies to customers.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "SEO increases paid traffic.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Canva is used to design creative reports.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Voiceover is a valid way to explain data.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "A website working 24/7 increases accessibility.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "AR replaces the real world completely with a virtual one.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "VR provides immersive shopping environments in business.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Canva can be used to design visually attractive business proposals.",
    answers: ["True", "False"],
    correct: 0
},
{
    question: "Microsoft Word cannot support multimedia content in reports.",
    answers: ["True", "False"],
    correct: 1
},
{
    question: "Employee digital stories are used to showcase customer experiences.",
    answers: ["True", "False"],
    correct: 1
}
,]*/

// كلمة المرور للحذف
const DELETE_PASSWORD = "00000";

// رابط ملف النتائج على GitHub (استبدل بمعلومات مشروعك)
const GITHUB_LEADERBOARD_URL = 'https://raw.githubusercontent.com/[username]/[repo]/main/leaderboard.json';

// حالة اللعبة
const gameState = {
    currentScreen: 'main-menu',
    score: 0,
    currentQuestionIndex: 0,
    correctAnswers: 0,
    streak: 0,
    gameQuestions: [],
    leaderboard: [],
    playerName: localStorage.getItem('playerName') || 'لاعب',
    soundEnabled: true,
    selectedTheme: localStorage.getItem('theme') || 'default'
};

// عناصر الواجهة
const elements = {
    screens: {
        'main-menu': document.getElementById('main-menu'),
        'settings-screen': document.getElementById('settings-screen'),
        'quiz-screen': document.getElementById('quiz-screen'),
        'results-screen': document.getElementById('results-screen'),
        'leaderboard-screen': document.getElementById('leaderboard-screen')
    },
    buttons: {
        startGame: document.getElementById('start-game'),
        settings: document.getElementById('settings-btn'),
        leaderboard: document.getElementById('leaderboard-btn'),
        next: document.getElementById('next-btn'),
        quit: document.getElementById('quit-btn'),
        saveScore: document.getElementById('save-score-btn'),
        playAgain: document.getElementById('play-again-btn'),
        settingsBack: document.getElementById('settings-back-btn'),
        resultsBack: document.getElementById('results-back-btn'),
        leaderboardBack: document.getElementById('leaderboard-back-btn'),
        deleteScore: document.getElementById('delete-score-btn'),
        confirmDelete: document.getElementById('confirm-delete-btn'),
        cancelDelete: document.getElementById('cancel-delete-btn')
    },
    quizElements: {
        questionText: document.getElementById('question-text'),
        answersContainer: document.getElementById('answers-container'),
        resultMessage: document.getElementById('result-message'),
        score: document.getElementById('score'),
        questionCount: document.getElementById('question-count'),
        streak: document.getElementById('streak'),
        progressBar: document.getElementById('progress-bar')
    },
    resultsElements: {
        finalScore: document.getElementById('final-score'),
        correctAnswers: document.getElementById('correct-answers'),
        finalProgress: document.getElementById('final-progress'),
        performanceComment: document.getElementById('performance-comment')
    },
    leaderboardElements: {
        leaderboardList: document.getElementById('leaderboard-list'),
        deleteSection: document.getElementById('delete-section'),
        deletePassword: document.getElementById('delete-password')
    },
    audio: {
        correct: document.getElementById('correct-sound'),
        wrong: document.getElementById('wrong-sound'),
        background: document.getElementById('background-music')
    },
    soundToggle: document.getElementById('sound-toggle'),
    themeOptions: document.querySelectorAll('.theme-option')
};

// تهيئة اللعبة
async function initGame() {
    loadSettings();
    setupEventListeners();
    await loadLeaderboard();
    playBackgroundMusic();
    console.log('تم تهيئة اللعبة بنجاح');
}

// تحميل الإعدادات
function loadSettings() {
    if (localStorage.getItem('soundEnabled') !== null) {
        gameState.soundEnabled = localStorage.getItem('soundEnabled') === 'true';
    }
    updateSoundButton();

    if (localStorage.getItem('theme')) {
        changeTheme(localStorage.getItem('theme'));
    }
}

// تحميل لوحة الصدارة
async function loadLeaderboard() {
    try {
        // جلب النتائج من GitHub
        const response = await fetch(GITHUB_LEADERBOARD_URL);
        if (!response.ok) throw new Error('Failed to fetch leaderboard');
        const githubLeaderboard = await response.json();
        
        // جلب النتائج المحلية
        const localLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        
        // دمج النتائج مع إزالة التكرارات
        const combinedLeaderboard = [...githubLeaderboard, ...localLeaderboard];
        combinedLeaderboard.sort((a, b) => b.score - a.score);
        
        // إزالة التكرارات بناءً على الاسم والنتيجة
        const uniqueLeaderboard = combinedLeaderboard.filter((item, index, self) =>
            index === self.findIndex(t => 
                t.name === item.name && t.score === item.score
            )
        );
        
        gameState.leaderboard = uniqueLeaderboard.slice(0, 10);
    } catch (error) {
        console.error('Error loading leaderboard:', error);
        // استخدام النتائج المحلية فقط في حالة الخطأ
        gameState.leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    }
}

// إعداد مستمعي الأحداث
function setupEventListeners() {
    // التنقل بين الشاشات
    elements.buttons.startGame.addEventListener('click', startGame);
    elements.buttons.settings.addEventListener('click', () => showScreen('settings-screen'));
    elements.buttons.leaderboard.addEventListener('click', () => showScreen('leaderboard-screen'));
    elements.buttons.next.addEventListener('click', nextQuestion);
    
    // أزرار الرجوع والخروج
    elements.buttons.quit.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.settingsBack.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.resultsBack.addEventListener('click', () => showScreen('main-menu'));
    elements.buttons.leaderboardBack.addEventListener('click', () => showScreen('main-menu'));
    
    // أحداث أخرى
    elements.buttons.saveScore.addEventListener('click', saveScore);
    elements.buttons.playAgain.addEventListener('click', restartGame);
    
    // أحداث الحذف
    elements.buttons.deleteScore.addEventListener('click', showDeleteSection);
    elements.buttons.confirmDelete.addEventListener('click', confirmDeleteScore);
    elements.buttons.cancelDelete.addEventListener('click', hideDeleteSection);
    
    // تغيير المظهر
    elements.themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            changeTheme(theme);
        });
    });
    
    // التحكم في الصوت
    elements.soundToggle.addEventListener('click', toggleSound);
    
    console.log('تم إعداد مستمعي الأحداث بنجاح');
}

// عرض قسم الحذف
function showDeleteSection() {
    if (gameState.leaderboard.length === 0) {
        alert('لا توجد نتائج مسجلة للحذف');
        return;
    }
    elements.leaderboardElements.deleteSection.style.display = 'block';
}

// إخفاء قسم الحذف
function hideDeleteSection() {
    elements.leaderboardElements.deleteSection.style.display = 'none';
    elements.leaderboardElements.deletePassword.value = '';
}

// تأكيد حذف النتيجة
async function confirmDeleteScore() {
    const password = elements.leaderboardElements.deletePassword.value;
    if (password !== DELETE_PASSWORD) {
        alert('كلمة المرور غير صحيحة');
        return;
    }

    const playerName = prompt('أدخل اسم اللاعب الذي تريد حذف نتيجته:');
    if (playerName && playerName.trim() !== '') {
        const index = gameState.leaderboard.findIndex(item => 
            item.name.toLowerCase() === playerName.toLowerCase());
        
        if (index !== -1) {
            await deleteScore(index);
        } else {
            alert('لا توجد نتيجة مسجلة لهذا اللاعب');
        }
    }
    hideDeleteSection();
}

// حذف النتيجة من القائمة
async function deleteScore(index) {
    if (confirm(`هل أنت متأكد من حذف نتيجة ${gameState.leaderboard[index].name}؟`)) {
        gameState.leaderboard.splice(index, 1);
        localStorage.setItem('leaderboard', JSON.stringify(gameState.leaderboard));
        await updateLeaderboard();
        alert('تم حذف النتيجة بنجاح');
    }
}

// تغيير الشاشة المعروضة
function showScreen(screenId) {
    console.log('محاولة عرض الشاشة:', screenId);
    
    // إخفاء جميع الشاشات
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // إظهار الشاشة المطلوبة
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
        targetScreen.classList.add('active');
        gameState.currentScreen = screenId;
        console.log('تم عرض الشاشة بنجاح:', screenId);
        
        // إيقاف الموسيقى إذا عدنا للقائمة الرئيسية
        if (screenId === 'main-menu') {
            stopBackgroundMusic();
        }
        
        // تحديث قائمة المتصدرين عند عرضها
        if (screenId === 'leaderboard-screen') {
            updateLeaderboard();
        }
    } else {
        console.error('لم يتم العثور على الشاشة:', screenId);
    }
}

// بدء اللعبة
function startGame() {
    gameState.score = 0;
    gameState.currentQuestionIndex = 0;
    gameState.correctAnswers = 0;
    gameState.streak = 0;
    
    gameState.gameQuestions = [...questions];
    shuffleArray(gameState.gameQuestions);
    
    showScreen('quiz-screen');
    showQuestion();
}

// عرض السؤال الحالي
function showQuestion() {
    if (gameState.currentQuestionIndex >= gameState.gameQuestions.length) {
        endGame();
        return;
    }
    
    const question = gameState.gameQuestions[gameState.currentQuestionIndex];
    elements.quizElements.questionText.textContent = question.question;
    elements.quizElements.answersContainer.innerHTML = '';
    
    question.answers.forEach((answer, index) => {
        const answerBtn = document.createElement('div');
        answerBtn.className = 'answer-btn';
        answerBtn.textContent = answer;
        answerBtn.dataset.correct = index === question.correct;
        answerBtn.addEventListener('click', () => selectAnswer(answerBtn));
        elements.quizElements.answersContainer.appendChild(answerBtn);
    });
    
    elements.quizElements.questionCount.textContent = `${gameState.currentQuestionIndex + 1}/${gameState.gameQuestions.length}`;
    elements.quizElements.progressBar.style.width = `${(gameState.currentQuestionIndex / gameState.gameQuestions.length) * 100}%`;
    elements.quizElements.score.textContent = gameState.score;
    elements.quizElements.streak.textContent = gameState.streak;
    elements.quizElements.resultMessage.textContent = '';
    elements.buttons.next.disabled = true;
}

// اختيار إجابة
function selectAnswer(selectedBtn) {
    if (selectedBtn.classList.contains('selected')) return;
    selectedBtn.classList.add('selected');
    
    const isCorrect = selectedBtn.dataset.correct === 'true';
    const answerBtns = elements.quizElements.answersContainer.querySelectorAll('.answer-btn');
    
    answerBtns.forEach(btn => {
        btn.style.pointerEvents = 'none';
        if (btn.dataset.correct === 'true') {
            btn.classList.add('correct');
        } else if (btn === selectedBtn && !isCorrect) {
            btn.classList.add('wrong');
        }
    });
    
    if (gameState.soundEnabled) {
        if (isCorrect) {
            elements.audio.correct.currentTime = 0;
            elements.audio.correct.play().catch(e => console.log("Error playing sound:", e));
        } else {
            elements.audio.wrong.currentTime = 0;
            elements.audio.wrong.play().catch(e => console.log("Error playing sound:", e));
        }
    }
    
    if (isCorrect) {
        gameState.correctAnswers++;
        gameState.streak++;
        const points = 10 * Math.min(gameState.streak, 5);
        gameState.score += points;
        elements.quizElements.resultMessage.textContent = `إجابة صحيحة! +${points} نقطة`;
        elements.quizElements.resultMessage.style.color = '#4CAF50';
    } else {
        gameState.streak = 0;
        elements.quizElements.resultMessage.textContent = 'إجابة خاطئة!';
        elements.quizElements.resultMessage.style.color = '#f44336';
    }
    
    elements.quizElements.score.textContent = gameState.score;
    elements.quizElements.streak.textContent = gameState.streak;
    elements.buttons.next.disabled = false;
}

// الانتقال إلى السؤال التالي
function nextQuestion() {
    gameState.currentQuestionIndex++;
    showQuestion();
}

// انتهاء اللعبة
function endGame() {
    showScreen('results-screen');
    
    elements.resultsElements.finalScore.textContent = gameState.score;
    elements.resultsElements.correctAnswers.textContent = `${gameState.correctAnswers}/${gameState.gameQuestions.length}`;
    
    const percentage = (gameState.correctAnswers / gameState.gameQuestions.length) * 100;
    elements.resultsElements.finalProgress.style.width = `${percentage}%`;
    
    let comment = '';
    if (percentage >= 90) comment = 'أداء رائع! أنت خبير في هذا المجال!';
    else if (percentage >= 70) comment = 'عمل جيد! لديك معرفة قوية.';
    else if (percentage >= 50) comment = 'ليس سيئاً! يمكنك التحسن بالممارسة.';
    else comment = 'حاول مرة أخرى! الممارسة تصنع الفرق.';
    
    elements.resultsElements.performanceComment.textContent = comment;
}

// إعادة اللعبة
function restartGame() {
    startGame();
}

// حفظ النتيجة
async function saveScore() {
    const playerName = prompt('أدخل اسمك لحفظ النتيجة:', gameState.playerName);
    
    if (playerName && playerName.trim() !== '') {
        gameState.playerName = playerName.trim();
        localStorage.setItem('playerName', gameState.playerName);
        
        const scoreEntry = {
            name: gameState.playerName,
            score: gameState.score,
            correct: gameState.correctAnswers,
            total: gameState.gameQuestions.length,
            date: new Date().toLocaleDateString()
        };
        
        // حفظ النتيجة محلياً
        const localLeaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
        localLeaderboard.push(scoreEntry);
        localStorage.setItem('leaderboard', JSON.stringify(localLeaderboard));
        
        // محاولة حفظ النتيجة على GitHub (هذه تحتاج إلى تطبيق أكثر تعقيداً)
        try {
            // هنا يمكنك إضافة كود لإرسال النتيجة إلى GitHub API
            console.log('Score would be saved to GitHub:', scoreEntry);
        } catch (error) {
            console.error('Error saving score to GitHub:', error);
        }
        
        alert('تم حفظ نتيجتك بنجاح!');
        await loadLeaderboard();
        showScreen('leaderboard-screen');
    }
}

// تحديث قائمة المتصدرين
async function updateLeaderboard() {
    elements.leaderboardElements.leaderboardList.innerHTML = '<p>جاري تحميل النتائج...</p>';
    
    try {
        await loadLeaderboard();
        
        if (gameState.leaderboard.length === 0) {
            elements.leaderboardElements.leaderboardList.innerHTML = '<p>لا توجد نتائج مسجلة بعد</p>';
            return;
        }
        
        elements.leaderboardElements.leaderboardList.innerHTML = '';
        
        gameState.leaderboard.forEach((entry, index) => {
            const scoreItem = document.createElement('div');
            scoreItem.className = 'leaderboard-item';
            
            if (entry.name === gameState.playerName) {
                scoreItem.style.fontWeight = 'bold';
                scoreItem.style.color = 'var(--primary-color)';
            }
            
            scoreItem.innerHTML = `
                <strong>${index + 1}. ${entry.name}</strong>
                <div>النقاط: ${entry.score} (${entry.correct}/${entry.total})</div>
                <small>${entry.date}</small>
                <button class="delete-btn" data-index="${index}">×</button>
            `;
            
            elements.leaderboardElements.leaderboardList.appendChild(scoreItem);
        });
        
        // إضافة مستمعي الأحداث لأزرار الحذف
        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.stopPropagation();
                const password = prompt('أدخل كلمة المرور للحذف:');
                if (password === DELETE_PASSWORD) {
                    const index = parseInt(this.dataset.index);
                    deleteScore(index);
                } else {
                    alert('كلمة المرور غير صحيحة');
                }
            });
        });
    } catch (error) {
        console.error('Error updating leaderboard:', error);
        elements.leaderboardElements.leaderboardList.innerHTML = '<p>حدث خطأ في تحميل النتائج</p>';
    }
}

// تغيير المظهر
function changeTheme(theme) {
    gameState.selectedTheme = theme;
    localStorage.setItem('theme', theme);
    document.body.className = theme === 'default' ? '' : `theme-${theme}`;
    
    elements.themeOptions.forEach(option => {
        option.classList.toggle('selected', option.dataset.theme === theme);
    });
}

// تبديل الصوت
function toggleSound() {
    gameState.soundEnabled = !gameState.soundEnabled;
    localStorage.setItem('soundEnabled', gameState.soundEnabled);
    updateSoundButton();
    
    if (gameState.soundEnabled) {
        playBackgroundMusic();
    } else {
        stopBackgroundMusic();
    }
}

// تشغيل موسيقى الخلفية
function playBackgroundMusic() {
    if (gameState.soundEnabled) {
        elements.audio.background.volume = 0.3;
        elements.audio.background.play().catch(e => console.log('لا يمكن تشغيل الصوت:', e));
    }
}

// إيقاف موسيقى الخلفية
function stopBackgroundMusic() {
    elements.audio.background.pause();
}

// تحديث زر الصوت
function updateSoundButton() {
    if (gameState.soundEnabled) {
        elements.soundToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
            </svg>
        `;
    } else {
        elements.soundToggle.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.74 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zM3.27 2 2 3.27 5.73 7H3v10h4l5 5V9.27L18.73 21 20 19.73 3.27 2z"/>
            </svg>
        `;
    }
}

// دالة خلط المصفوفة
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// تشغيل اللعبة عند الضغط على زر "ابدأ اللعب"
if (elements.buttons.startGame) {
    elements.buttons.startGame.addEventListener('click', () => {
        console.log("زر البدء تم النقر عليه، بدء اللعبة...");
        startGame();
    });
} else {
    console.error("لم يتم العثور على زر بدء اللعبة!");
}

// التأكد من تشغيل اللعبة عند تحميل الصفحة
window.addEventListener('load', () => {
    console.log("جارٍ تحميل اللعبة...");
    initGame();
});
