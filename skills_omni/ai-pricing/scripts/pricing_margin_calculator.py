#!/usr/bin/env python3
"""Quick gross-margin scenario calculator for AI pricing reviews.

This helper is intentionally narrow: it computes one scenario from simple inputs
and prints a readable summary for use inside a pricing workflow.
"""

from __future__ import annotations

import argparse
import sys


def positive_float(value: str) -> float:
    try:
        number = float(value)
    except ValueError as exc:
        raise argparse.ArgumentTypeError(f"invalid number: {value}") from exc
    if number < 0:
        raise argparse.ArgumentTypeError("value must be >= 0")
    return number


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Compute a simple AI pricing margin scenario.")
    parser.add_argument("--price-per-unit", type=positive_float, required=True, help="Revenue per variable billable unit")
    parser.add_argument("--units", type=positive_float, required=True, help="Number of billable units")
    parser.add_argument("--ai-cost-per-unit", type=positive_float, required=True, help="AI cost per unit")
    parser.add_argument("--delivery-cost-per-unit", type=positive_float, default=0.0, help="Other delivery/support variable cost per unit")
    parser.add_argument("--fixed-revenue", type=positive_float, default=0.0, help="Base subscription or platform revenue")
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    variable_revenue = args.price_per_unit * args.units
    total_revenue = args.fixed_revenue + variable_revenue
    variable_ai_cost = args.ai_cost_per_unit * args.units
    variable_delivery_cost = args.delivery_cost_per_unit * args.units
    total_variable_cost = variable_ai_cost + variable_delivery_cost
    contribution_margin = total_revenue - total_variable_cost

    gross_margin_pct = 0.0
    if total_revenue > 0:
        gross_margin_pct = (contribution_margin / total_revenue) * 100.0

    print("AI Pricing Margin Scenario")
    print("==========================")
    print(f"Fixed revenue:          {args.fixed_revenue:,.2f}")
    print(f"Variable revenue:       {variable_revenue:,.2f}")
    print(f"Total revenue:          {total_revenue:,.2f}")
    print(f"AI variable cost:       {variable_ai_cost:,.2f}")
    print(f"Delivery variable cost: {variable_delivery_cost:,.2f}")
    print(f"Total variable cost:    {total_variable_cost:,.2f}")
    print(f"Contribution margin:    {contribution_margin:,.2f}")
    print(f"Gross margin %:         {gross_margin_pct:,.2f}%")

    if total_revenue == 0:
        print("\nWarning: total revenue is zero; gross margin percentage is not meaningful.", file=sys.stderr)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
