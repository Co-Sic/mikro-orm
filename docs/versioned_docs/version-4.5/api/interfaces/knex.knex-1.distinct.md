---
id: "knex.knex-1.distinct"
title: "Interface: Distinct<TRecord, TResult>"
sidebar_label: "Distinct"
custom_edit_url: null
hide_title: true
---

# Interface: Distinct<TRecord, TResult\>

[knex](../modules/knex.md).[Knex](../modules/knex.knex-1.md).Distinct

## Type parameters

Name | Type | Default |
:------ | :------ | :------ |
`TRecord` | *object* | - |
`TResult` | - | {}[] |

## Hierarchy

* [*ColumnNameQueryBuilder*](knex.knex-1.columnnamequerybuilder.md)<TRecord, TResult\>

  ↳ **Distinct**

## Callable

▸ **Distinct**(`columnName`: ***): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, ArrayIfAlready<TResult, DeferredKeySelection<TRecord, string, *false*, {}, *false*, {}, never\>\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`columnName` | *** |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, ArrayIfAlready<TResult, DeferredKeySelection<TRecord, string, *false*, {}, *false*, {}, never\>\>\>

Defined in: node_modules/knex/types/index.d.ts:1434

▸ **Distinct**<ColNameUT, TResult2\>(...`columnNames`: readonly ColNameUT[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`ColNameUT` | *string* \| *number* \| *symbol* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, ColNameUT & *string*\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`...columnNames` | readonly ColNameUT[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1440

▸ **Distinct**<ColNameUT, TResult2\>(`columnNames`: readonly ColNameUT[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Type | Default |
:------ | :------ | :------ |
`ColNameUT` | *string* \| *number* \| *symbol* | - |
`TResult2` | - | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, [*ResolveTableType*](../modules/knex.knex-1.md#resolvetabletype)<TRecord, *base*\>\>, ColNameUT & *string*\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columnNames` | readonly ColNameUT[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1451

▸ **Distinct**<TResult2\>(...`columnNames`: readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, Partial<AnyOrUnknownToOther<TRecord, {}\>\>\>, keyof TRecord & *string*\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`...columnNames` | readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1462

▸ **Distinct**<TResult2\>(`columnNames`: readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[]): [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

#### Type parameters:

Name | Default |
:------ | :------ |
`TResult2` | *AddAliases*<AddKey<SetBase<UnwrapArrayMember<TResult\>, Partial<AnyOrUnknownToOther<TRecord, {}\>\>\>, keyof TRecord & *string*\>, {}\>[] |

#### Parameters:

Name | Type |
:------ | :------ |
`columnNames` | readonly [*ColumnDescriptor*](../modules/knex.knex-1.md#columndescriptor)<TRecord, TResult\>[] |

**Returns:** [*QueryBuilder*](../classes/knex.knex-1.querybuilder.md)<TRecord, TResult2\>

Defined in: node_modules/knex/types/index.d.ts:1474
