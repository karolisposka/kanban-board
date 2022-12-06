
export const SelectOptions = (theme: string ) => {
    const customStyles = {
        control: (styles:any, state:any) => (
          {
            ...styles,
            background: 'transparent',
            boxShadow:'none',
            color: 'white',
            borderColor: state.isFocused  ? '#635FC7' : '#828FA340',
            "&:hover": {
                
            }
        }),
        singleValue: (styles: any) => (
          {
            ...styles,
            color: theme === 'dark' ? '#ffffff' : '#000112'
          }
        ),
        menu: (styles: any) => ({...styles, background:theme ==='dark' ? '#20212C' : '#ffffff' }),
        option: (styles: any) => {
          return {
            ...styles,
            color: '#9fa8b5',
          }
        },
        indicatorSeparator: (styles: any) => ({
          ...styles,
          display: 'none'
        }),
        dropdownIndicator: (styles: any, state: any) => ({
          ...styles,
          color: state.menuIsOpen ? "#635FC7" : "#635FC7",
          "&:hover": {
            color: '#635FC7'
          }
        })
    };

    return customStyles
}

