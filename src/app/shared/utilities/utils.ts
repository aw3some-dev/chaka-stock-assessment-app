export const getBackgroundImageStyle = (imagePath: string) => {
    return {
        'background-image': `url(${imagePath})`,
        'height': '240px',
        'width': '20%',
        'background-color': 'limegreen',
        'background-repeat': 'no-repeat',
        'background-position': 'center',
        'background-size': 'cover',
    }
};