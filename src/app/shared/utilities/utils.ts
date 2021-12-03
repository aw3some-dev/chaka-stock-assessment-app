export const getBackgroundImageStyle = (imagePath: string, pixelHeight: number) : Object => {
    return {
        'background-image': `url(${imagePath})`,
        'height': `${pixelHeight}px`,
        // 'width': '20%',
        'background-color': 'limegreen',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
    }
};