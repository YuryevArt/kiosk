import React, { useState, useContext } from 'react'

import { ContainersGrid, TechButton } from './CatalogContent.style'

import { Header, GridCard, Modal, ProductForm, TechMenu, PlacePicker } from '..'
import { PlaceContext } from "../../Contexts/PlaceContext";

function CatalogContent({ UTSdump, setCart }) {
    const [activeModal, setActiveModal] = useState({
        active: false,
        product: null,
    });
    console.log("product", activeModal.product);
    const [activeTechMenu, setActiveTechMenu] = useState({
        active: false,
    });
    const [activePlace, setActivePlace] = useContext(PlaceContext);
    const [category, setCategory] = useState(UTSdump.category.find(x => x.products.length > 0).id);
    let productsDump = UTSdump.category.find((x) => x.id === category).products;
    productsDump.sort(function (a, b) {
        if (a.nomer > b.nomer) {
            return 1;
        }
        if (a.nomer < b.nomer) {
            return -1;
        }
        return 0;
    });

    // console.log(productsDump);
    let products = productsDump;
    const changeCategory = (id) => {
        // carousel.current.scroll(0,0);
        // carousel.current.goTo(0);
        setCategory(id);
    };
    return (
        <ContainersGrid>
            <Header
                categories={UTSdump.category}
                activeCategory={category}
                clickOnCategory={changeCategory}
            />
            <GridCard
                showModal={setActiveModal}
                products={products}
            ></GridCard>
            <Modal active={activeModal.active} setActive={setActiveModal}>
                {activeModal.product != null &&
                    <ProductForm setCart={setCart} closeModal={() => {
                        setActiveModal(prevstate => {
                            return {
                                ...prevstate,
                                active: false,
                            }
                        }
                        )
                    }
                    } product={activeModal.product} />}
            </Modal>

            <TechButton onClick={() => { setActiveTechMenu({ active: true }) }}>Н</TechButton>
            <TechMenu active={activeTechMenu} setActive={setActiveTechMenu} />
            <PlacePicker active={activePlace.place === null} setActive={setActivePlace} />


        </ContainersGrid>

    )
}

export default CatalogContent
