import * as S from './Dropdown.style';
import { useState } from 'react';

const Dropdown = ({ label, options, size, openIcon, closeIcon, onSelect }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedMenu, setSelectedMenu] = useState(null);

	const handleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const selectMenu = menu => {
		setSelectedMenu(menu);
		setIsOpen(false);
		console.log(menu);
		onSelect(menu);
	};

	return (
		<S.DropdownContainer size={size}>
			<S.DropdownButtonArea onClick={handleDropdown}>
				<S.DropdownLabel isSelected={selectedMenu !== null}>
					{selectedMenu || label}
				</S.DropdownLabel>
				{isOpen ? closeIcon : openIcon}
			</S.DropdownButtonArea>
			<S.DropdownMenuArea isOpen={isOpen}>
				{options.map((menu, index) => (
					<S.DropdownMenu key={index} onClick={() => selectMenu(menu)}>
						{menu}
					</S.DropdownMenu>
				))}
			</S.DropdownMenuArea>
		</S.DropdownContainer>
	);
};

export default Dropdown;