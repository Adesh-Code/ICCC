import EngageWithUs from "../partials/engage-with-us";
import {Title, Description} from '@storybook/addon-docs';
/**
 * 

### Component status reference

| Status      | Description                                         |
| ----------- | --------------------------------------------------- |
| Stable      | Ready to use                                        |
| In progress | Under development components, API subject to change |

👈 Display the component list by clicking the **_Components_** folder in the left sidebar. You may also use the search at the top to find any component.

 */
const meta = {
    title:"ICCC/Components/Overview",
    component: EngageWithUs,
    parameters: {
        docs: {
            page: () => (
                <>
                <Title />
                <Description />
                </>
            )
        }
    }
}

export default meta;
