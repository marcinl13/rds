import { jsx } from "react/jsx-runtime";
import external_classnames_default from "classnames";
import { cva } from "class-variance-authority";
const labelVariants = cva("block", {
    variants: {
        _intent: {
            gray: "text-gray-900"
        },
        _size: {
            small: "py-1 text-sm",
            medium: "py-2 text-base",
            large: "py-3 text-lg"
        }
    },
    defaultVariants: {
        _intent: "gray",
        _size: "medium"
    }
});
const RdsLabel = ({ _intent, _size, className, children, ...props })=>/*#__PURE__*/ jsx("label", {
        className: external_classnames_default(labelVariants({
            _intent,
            _size
        }), className),
        ...props,
        children: children
    });
export { RdsLabel };
